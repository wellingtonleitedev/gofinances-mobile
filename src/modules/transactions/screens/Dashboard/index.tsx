import React from 'react';
import { withDatabase } from '@nozbe/watermelondb/DatabaseProvider';
import withObservables from '@nozbe/with-observables';
import { Database } from '@nozbe/watermelondb';
import Transaction from '../../../../components/Transaction';
import Balance from '../../../../components/Balance';
import Header from '../../../../components/Header';
import { Container, Content, Title, List } from './styles';

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

const Dashboard: React.FC<DashboardProps> = ({ transactions = [] }) => {
  return (
    <>
      <Header />
      <Balance transactions={[transactions]} />
      <Container>
        <Content>
          <Title>Listagem</Title>
          <List
            data={transactions}
            keyExtractor={(_, index) => String(index)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item: transaction }) => (
              <Transaction transaction={transaction} />
            )}
          />
        </Content>
      </Container>
    </>
  );
};

export default withDatabase(
  withObservables([], ({ database }: { database: Database }) => ({
    transactions: database.collections.get('transactions').query().observe(),
  }))(Dashboard),
);
