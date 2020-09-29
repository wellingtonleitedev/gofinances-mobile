import React from 'react';
import { useTransactions } from '../../../../hooks/transactions';
import Balance from '../../../../components/Balance';
import Header from '../../../../components/Header';
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

interface Transaction {
  id: string;
  title: string;
  value: number;
  formattedValue: string;
  formattedDate: string;
  type: string;
  category: { title: string };
  createdAt: number;
}

interface DashboardProps {
  transactions: Transaction[];
}

const Dashboard: React.FC<DashboardProps> = () => {
  const { transactions, balance } = useTransactions();

  return (
    <>
      <Header />
      <Balance data={balance} />
      <Container>
        <Content>
          <Title>Listagem</Title>
          <List
            data={transactions}
            keyExtractor={(_, index) => String(index)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Card>
                <CardTitle>{item.title}</CardTitle>
                <Value type={item.type}>{item.formattedValue}</Value>
                <Description>
                  {/* <Category>{item.category.title}</Category> */}
                  <Date>{item.formattedDate}</Date>
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
