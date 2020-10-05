import React, { useMemo } from 'react';
import withObservables from '@nozbe/with-observables';
import { formatDate, formatValue } from '../../utils/format';
import { Card, CardTitle, Value, Description, Category, Date } from './styles';

interface Transaction {
  id: string;
  title: string;
  type: 'income' | 'outcome';
  value: number;
  formattedValue: string;
  formattedDate: string;
  createdAt: number;
}

interface TransactionProps {
  transaction: Transaction;
  category: { title: string };
}

const Transaction: React.FC<TransactionProps> = ({ transaction, category }) => {
  const transactionFormatted = useMemo(() => {
    let formattedValue = formatValue(transaction.value);

    if (transaction.type === 'outcome') {
      formattedValue = `- ${formattedValue}`;
    }

    const formattedDate = formatDate(transaction.createdAt);
    return {
      id: transaction.id,
      title: transaction.title,
      value: transaction.value,
      type: transaction.type,
      formattedValue,
      formattedDate,
    };
  }, [transaction]);

  return (
    <Card>
      <CardTitle>{transactionFormatted.title}</CardTitle>
      <Value type={transaction.type}>
        {transactionFormatted.formattedValue}
      </Value>
      <Description>
        <Category>{category.title}</Category>
        <Date>{transactionFormatted.formattedDate}</Date>
      </Description>
    </Card>
  );
};

export default withObservables(['transaction'], ({ transaction }) => ({
  transaction: transaction.observe(),
  category: transaction.category.observe(),
}))(Transaction);
