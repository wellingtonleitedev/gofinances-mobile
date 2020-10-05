import React, { useMemo } from 'react';
import { ScrollView } from 'react-native';
import withObservables from '@nozbe/with-observables';
import { formatValue } from '../../utils/format';
import Income from '../../assets/svg/income';
import Outcome from '../../assets/svg/outcome';
import Total from '../../assets/svg/total';
import {
  BalanceContainer,
  BalanceCard,
  BalanceHeader,
  Text,
  Value,
} from './styles';

interface Transaction {
  id: string;
  title: string;
  type: 'income' | 'outcome';
  value: number;
}

interface BalanceProps {
  transactions: Transaction[];
}

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

const Balance: React.FC<BalanceProps> = ({ transactions }) => {
  const balance = useMemo(() => {
    const reduce = transactions.reduce(
      (accumulator, transaction): Balance => {
        if (transaction.type === 'income') {
          accumulator.income += transaction.value;
        } else {
          accumulator.outcome += transaction.value;
        }

        accumulator.total = accumulator.income - accumulator.outcome;

        return accumulator;
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    );

    return {
      income: formatValue(reduce.income),
      outcome: formatValue(reduce.outcome),
      total: formatValue(reduce.total),
    };
  }, [transactions]);

  return (
    <>
      <BalanceContainer />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ height: 220 }}
        style={{ marginTop: -160 }}
      >
        <BalanceCard>
          <BalanceHeader>
            <Text>Entradas</Text>
            <Income />
          </BalanceHeader>
          <Value>{balance.income}</Value>
        </BalanceCard>
        <BalanceCard>
          <BalanceHeader>
            <Text>Saídas</Text>
            <Outcome />
          </BalanceHeader>
          <Value>{balance.outcome}</Value>
        </BalanceCard>
        <BalanceCard style={{ backgroundColor: '#FF872C' }}>
          <BalanceHeader>
            <Text style={{ color: '#FFF' }}>Total</Text>
            <Total />
          </BalanceHeader>
          <Value style={{ color: '#FFF' }}>{balance.total}</Value>
        </BalanceCard>
      </ScrollView>
    </>
  );
};

export default withObservables(['transactions'], ({ transactions }) => ({
  transactions,
}))(Balance);
