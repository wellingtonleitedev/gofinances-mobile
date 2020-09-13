import React, { useCallback, useState } from 'react';
import Income from '../../assets/svg/income';
import Outcome from '../../assets/svg/outcome';
import { Container, Option, Text } from './styles';

interface TypeSelectProps {
  onChange: Function;
}

export enum TypeEnum {
  income = 'income',
  outcome = 'outcome',
}

const TypeSelect: React.FC<TypeSelectProps> = ({ onChange }) => {
  const [type, setType] = useState('');
  const handleType = useCallback(type => {
    setType(type);
    onChange(type);
  }, []);

  return (
    <Container>
      <Option
        selected={type === TypeEnum.income}
        type={type}
        onPress={() => handleType(TypeEnum.income)}
      >
        <Income />
        <Text>Entrada</Text>
      </Option>
      <Option
        selected={type === TypeEnum.outcome}
        type={type}
        onPress={() => handleType(TypeEnum.outcome)}
      >
        <Outcome />
        <Text>Saída</Text>
      </Option>
    </Container>
  );
};

export default TypeSelect;
