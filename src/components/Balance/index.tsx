import React from 'react';
import { ScrollView } from 'react-native';
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

interface BalanceProps {
  data: Balance;
}

interface Balance {
  income: string;
  outcome: string;
  total: string;
}

const Balance: React.FC<BalanceProps> = ({ data }) => {
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
          <Value>{data.income}</Value>
        </BalanceCard>
        <BalanceCard>
          <BalanceHeader>
            <Text>Saídas</Text>
            <Outcome />
          </BalanceHeader>
          <Value>{data.outcome}</Value>
        </BalanceCard>
        <BalanceCard style={{ backgroundColor: '#FF872C' }}>
          <BalanceHeader>
            <Text style={{ color: '#FFF' }}>Total</Text>
            <Total />
          </BalanceHeader>
          <Value style={{ color: '#FFF' }}>{data.total}</Value>
        </BalanceCard>
      </ScrollView>
    </>
  );
};

export default Balance;
