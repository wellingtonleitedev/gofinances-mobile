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

const Balance: React.FC = () => {
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
          <Value>R$ 1.400,00</Value>
        </BalanceCard>
        <BalanceCard>
          <BalanceHeader>
            <Text>Saídas</Text>
            <Outcome />
          </BalanceHeader>
          <Value>R$ 1.400,00</Value>
        </BalanceCard>
        <BalanceCard style={{ backgroundColor: '#FF872C' }}>
          <BalanceHeader>
            <Text style={{ color: '#FFF' }}>Total</Text>
            <Total />
          </BalanceHeader>
          <Value style={{ color: '#FFF' }}>R$ 1.400,00</Value>
        </BalanceCard>
      </ScrollView>
    </>
  );
};

export default Balance;
