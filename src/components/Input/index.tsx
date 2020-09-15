import React, {
  useRef,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';
import { TextInput, Error } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  containerStyle?: {};
}

interface InputValueReference {
  value: string;
}

interface InputRefProps {
  focus(): void;
}

const Input: React.ForwardRefRenderFunction<InputRefProps, InputProps> = (
  { name, containerStyle = {}, ...rest },
  ref,
) => {
  const { registerField, fieldName, defaultValue = '', error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });
  const inputElementRef = useRef<any>(null);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(_: any, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [registerField, fieldName]);

  return (
    <>
      <TextInput
        ref={inputElementRef}
        errored={!!error}
        placeholderTextColor="#969cb3"
        defaultValue={defaultValue}
        onChangeText={value => {
          inputValueRef.current.value = value;
        }}
        {...rest}
      />
      {!!error && <Error>{error}</Error>}
    </>
  );
};

export default forwardRef(Input);
