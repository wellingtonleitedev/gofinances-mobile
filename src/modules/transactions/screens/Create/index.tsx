import React, { useCallback, useRef, useState } from 'react';
import { Alert } from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import { useTransactions } from '../../../../hooks/transactions';
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
  const { addTransaction } = useTransactions();
  const formRef = useRef<FormHandles>(null);
  const [type, setType] = useState('');
  const [error, setError] = useState<string>('');

  const handleSubmit = useCallback(
    async (data: Transaction, { reset }): Promise<void> => {
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

        await addTransaction({ ...data, type });

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
      }
    },
    [navigate, addTransaction, type],
  );

  return (
    <>
      <Header />
      <Container>
        <Title>Cadastro</Title>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="title" autoCapitalize="words" placeholder="Nome" />
          <Input name="value" keyboardType="number-pad" placeholder="Preço" />
          <TypeSelect onChange={(value: string) => setType(value)} />
          {!!error && <Error>{error}</Error>}
          <Input
            name="category"
            autoCapitalize="words"
            placeholder="Categoria"
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
    </>
  );
};

export default Create;
