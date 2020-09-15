import React, { useCallback, useRef, useState } from 'react';
import { Alert } from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import Header from '../../components/Header';
import Input from '../../components/Input';
import TypeSelect from '../../components/TypeSelect';
import api from '../../services/api';
import errorHandling from '../../utils/errorHandling';
import { Container, Title, Error, Button, Text } from './styles';

interface Transaction {
  title: string;
  value: number;
  category: string;
}

const Create: React.FC = () => {
  const { navigate } = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const [type, setType] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = useCallback(
    async (data: Transaction, { reset }) => {
      formRef.current?.setErrors({});
      try {
        const schema = Yup.object().shape({
          title: Yup.string().required('Nome da transação é obrigatório'),
          value: Yup.string().required('Valor da transação é obrigatório'),
          category: Yup.string().required(
            'Categoria da transação é obrigatório',
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        if (!type) {
          return setError('Tipo da transação é obrigatório');
        }

        await api.post('/transactions', { ...data, type });

        reset();

        navigate('Dashboard');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = errorHandling(error);
          formRef.current?.setErrors(errors);
          return;
        }

        Alert.alert(
          'Houve um problema com o cadastro.',
          'Não foi possível cadastrar a transação!',
        );
      }
    },
    [type, navigate],
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
