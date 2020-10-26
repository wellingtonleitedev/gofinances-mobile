import React, { useCallback, useRef, useState } from 'react';
import {
  Alert,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import sync from '../../../../config/sync';
import CreateTransactionService from '../../services/CreateTransactionService';
import Header from '../../../../components/Header';
import Input from '../../../../components/Input';
import TypeSelect from '../../../../components/TypeSelect';
import errorHandling from '../../../../utils/errorHandling';
import { Container, Title, Error, Button, Text } from './styles';

interface Transaction {
  title: string;
  value: number;
  category: string;
}

const Create: React.FC = () => {
  const { navigate } = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const valueRef = useRef<TextInput>(null);
  const categoryRef = useRef<TextInput>(null);
  const [type, setType] = useState('');
  const [error, setError] = useState<string>('');

  const handleSubmit = useCallback(
    async (data: Transaction, { reset }): Promise<void> => {
      const createTransaction = new CreateTransactionService();

      formRef.current?.setErrors({});
      try {
        const schema = Yup.object().shape({
          title: Yup.string().required('Nome da transação é obrigatório'),
          value: Yup.number().required('Valor da transação é obrigatório'),
          category: Yup.string().required(
            'Categoria da transação é obrigatório',
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        if (!type) {
          setError('Tipo da transação é obWrigatório');
          return;
        }

        await createTransaction.execute({
          ...data,
          type,
        });

        reset();

        navigate('Listagem');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = errorHandling(err);
          formRef.current?.setErrors(errors);
          return;
        }

        Alert.alert(
          'Houve um problema com o cadastro.',
          'Não foi possível cadastrar a transação!',
        );
      } finally {
        await sync();
      }
    },
    [navigate, type],
  );

  return (
    <>
      <Header />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <Container>
            <Title>Cadastro</Title>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input
                name="title"
                autoCapitalize="words"
                placeholder="Nome"
                returnKeyType="next"
                onSubmitEditing={() => valueRef.current?.focus()}
              />
              <Input
                ref={valueRef}
                name="value"
                keyboardType="number-pad"
                placeholder="Preço"
                returnKeyType="next"
                onSubmitEditing={() => categoryRef.current?.focus()}
              />
              <TypeSelect onChange={(value: string) => setType(value)} />
              {!!error && <Error>{error}</Error>}
              <Input
                ref={categoryRef}
                name="category"
                autoCapitalize="words"
                placeholder="Categoria"
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />
              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                <Text>Cadastrar</Text>
              </Button>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Create;
