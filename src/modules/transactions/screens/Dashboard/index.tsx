import React, { useCallback, useState } from 'react';
import { Alert, RefreshControl } from 'react-native';
import { withDatabase } from '@nozbe/watermelondb/DatabaseProvider';
import withObservables from '@nozbe/with-observables';
import { Database } from '@nozbe/watermelondb';
import Transaction from '../../../../components/Transaction';
import Balance from '../../../../components/Balance';
import Header from '../../../../components/Header';
import sync from '../../../../config/sync';
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
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);

    await sync();

    setRefreshing(false);
  }, []);

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
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
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
