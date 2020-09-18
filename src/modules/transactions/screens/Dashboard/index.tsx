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
  formattedValue: string;
  formattedDate: string;
  type: 'income' | 'outcome';
  category: { title: string };
  created_at: Date;
}

interface IBalance {
  income: string;
  outcome: string;
  total: string;
}

const Dashboard: React.FC = () => {
  const [transaction, setTransaction] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState<IBalance>({} as IBalance);

  console.log({ transaction });

  // useEffect(() => {
  //   async function loadTransactions(): Promise<void> {
  //     const { data } = await api.get('/transactions');

  //     const transactionsFormatted = data.transactions.map(
  //       (transaction: Transaction) => {
  //         let formattedValue = formatValue(transaction.value);

  //         if (transaction.type === 'outcome') {
  //           formattedValue = `- ${formattedValue}`;
  //         }

  //         const formattedDate = formatDate(transaction.created_at);

  //         return {
  //           ...transaction,
  //           formattedValue,
  //           formattedDate,
  //         };
  //       },
  //     );

  //     const balanceFormatted = {
  //       income: formatValue(data.balance.income),
  //       outcome: formatValue(data.balance.outcome),
  //       total: formatValue(data.balance.total),
  //     };

  //     setBalance(balanceFormatted);
  //     setTransactions(transactionsFormatted);
  //   }

  //   loadTransactions();
  // }, []);

  // useEffect(() => {
  //   async function getTransactions(): Promise<void> {
  //     const result = await TransactionCollection.query().fetch();

  //     console.log({ result });
  //   }

  //   getTransactions();
  // }, []);

  useEffect(() => {
    async function loadTransactions(): Promise<void> {
      const getTransactions = new GetTransactionsService();

      const response = await getTransactions.execute();

      console.log({ response });

      const transactions = response.map(item => item._raw);

      setTransaction(response);
    }

    loadTransactions();
  });

  return (
    <>
      <Header />
      <Balance data={balance} />
      <Container>
        <Content>
          <Title>Listagem</Title>

          {/* <EnhancedTransaction transaction={transaction} /> */}
          <List
            // data={transaction}
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

const enhance = withObservables(['transaction'], ({ transaction }) => ({
  transaction,
}));

const EnhancedTransaction = enhance(Dashboard);

export default Dashboard;
