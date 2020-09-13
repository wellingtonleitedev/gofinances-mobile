import React, { useCallback, useRef, useState } from 'react';
import Header from '../../components/Header';
import { Form } from '@unform/mobile';
import Input from '../../components/Input';
import { Container } from './styles';
import TypeSelect from '../../components/TypeSelect';
import { Title, Button, Text } from './styles';
import { FormHandles } from '@unform/core';

const Create: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [type, setType] = useState<string>('');

  const handleSubmit = useCallback(() => {
    console.log(type);
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Title>Cadastro</Title>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" placeholder="Nome" />
          <Input name="price" placeholder="Preço" />
          <TypeSelect onChange={(value: string) => setType(value)} />
          <Input name="category" placeholder="Categoria" />
          <Button onPress={() => formRef.current?.submitForm()}>
            <Text>Cadastrar</Text>
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Create;
