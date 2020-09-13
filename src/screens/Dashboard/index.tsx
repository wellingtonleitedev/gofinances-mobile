import React, { useState } from 'react';
import { View } from 'react-native';
import Balance from '../../components/Balance';
import Header from '../../components/Header';
import {
  Container,
  Content,
  Title,
  List,
  Card,
  CardTitle,
  Value,
  Description,
  Category,
  Date,
} from './styles';

const Dashboard: React.FC = () => {
  const [data, setData] = useState([
    {
      title: 'Desenvolvimento de Site',
      total: 12000,
      category: 'Vendas',
      date: '13/04/2020',
    },
    {
      title: 'Desenvolvimento de Site',
      total: 12000,
      category: 'Vendas',
      date: '13/04/2020',
    },
    {
      title: 'Desenvolvimento de Site',
      total: 12000,
      category: 'Vendas',
      date: '13/04/2020',
    },
    {
      title: 'Desenvolvimento de Site',
      total: 12000,
      category: 'Vendas',
      date: '13/04/2020',
    },
    {
      title: 'Desenvolvimento de Site',
      total: 12000,
      category: 'Vendas',
      date: '13/04/2020',
    },
  ]);

  return (
    <>
      <Header />
      <Balance />
      <Container>
        <Content>
          <Title>Listagem</Title>
          <List
            data={data}
            keyExtractor={(_, index) => String(index)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Card>
                <CardTitle>{item.title}</CardTitle>
                <Value>{item.total}</Value>
                <Description>
                  <Category>{item.category}</Category>
                  <Date>{item.date}</Date>
                </Description>
              </Card>
            )}
          />
        </Content>
      </Container>
    </>
  );
};

export default Dashboard;
