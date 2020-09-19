import React, { useState, useEffect } from 'react';
import withObservables from '@nozbe/with-observables';
import Balance from '../../../../components/Balance';
import Header from '../../../../components/Header';
import api from '../../../../services/api';
import { formatDate, formatValue } from '../../../../utils/format';
import GetTransactionsService from '../../services/GetTransactionsService';
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
  // formattedValue: string;
  // formattedDate: string;
  type: string;
  category: { title: string };
  createdAt: number;
}

interface TransactionsProps {
  transactions: Transaction[];
}

interface IBalance {
  income: string;
  outcome: string;
  total: string;
}

const Dashboard: React.FC = () => {
  const [data, setData] = useState<Transaction[]>([]);
  // const [balance, setBalance] = useState<IBalance>({} as IBalance);

  useEffect(() => {
    async function loadTransactions(): Promise<void> {
      const getTransactions = new GetTransactionsService();

      const response = await getTransactions.execute();

      setData(response);
    }

    loadTransactions();
  }, []);

  const Transactions: React.FC<TransactionsProps> = ({ transactions }) => {
    console.log({ transactions });

    const newTransactions = [transactions];
    return (
      <>
        <Header />
        {/* <Balance data={balance} /> */}
        <Container>
          <Content>
            <Title>Listagem</Title>
            <List
              data={newTransactions}
              keyExtractor={(_, index) => String(index)}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <Card>
                  <CardTitle>{item.title}</CardTitle>
                  <Value type={item.type}>{item.formattedValue}</Value>
                  <Description>
                    <Category>{item.category.title}</Category>
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

  const enhance = withObservables(['transactions'], ({ transactions }) => ({
    transactions,
  }));

  const EnhancedTransaction = enhance(Transactions);

  return <EnhancedTransaction transactions={data} />;
};

export default Dashboard;
