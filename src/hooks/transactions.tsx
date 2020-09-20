import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import CreateTransactionService from '../modules/transactions/services/CreateTransactionService';
import GetTransactionsService from '../modules/transactions/services/GetTransactionsService';
import { formatDate, formatValue } from '../utils/format';

interface TransactionContextData {
  transactions: Transaction[];
  balance: Balance;
  addTransaction(data: CreateTransactionDto): Promise<void>;
}

interface Transaction {
  id: string;
  title: string;
  value: number;
  formattedValue: string;
  formattedDate: string;
  type: string;
  category: { title: string };
}

interface Balance {
  income: string;
  outcome: string;
  total: string;
}

interface CreateTransactionDto {
  title: string;
  value: number;
  type: string;
  category: string;
}

const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData,
);

const TransactionProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState<Balance>({} as Balance);

  useEffect(() => {
    async function loadTransactions(): Promise<void> {
      const getTransactions = new GetTransactionsService();

      const response = await getTransactions.execute();

      const transactionsFormatted = response.transactions.map(transaction => {
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
          category: transaction.category,
          formattedValue,
          formattedDate,
        };
      });

      const balanceFormatted = {
        income: formatValue(response.balance.income),
        outcome: formatValue(response.balance.outcome),
        total: formatValue(response.balance.total),
      };

      setData(transactionsFormatted);
      setBalance(balanceFormatted);
    }

    loadTransactions();
  }, []);

  const addTransaction = useCallback(
    async ({
      title,
      value,
      type,
      category,
    }: CreateTransactionDto): Promise<void> => {
      const createTransaction = new CreateTransactionService();

      const transaction = await createTransaction.execute({
        title,
        value,
        type,
        category,
      });

      let formattedValue = formatValue(transaction.value);

      if (transaction.type === 'outcome') {
        formattedValue = `- ${formattedValue}`;
      }

      const formattedDate = formatDate(transaction.createdAt);

      const newBalance = {
        income:
          type === 'income' ? balance.income + Number(value) : balance.income,
        outcome:
          type === 'outcome'
            ? balance.outcome + Number(value)
            : balance.outcome,
        total: balance.total,
      };

      setData(state => [
        ...state,
        {
          ...transaction,
          formattedValue,
          formattedDate,
        },
      ]);

      setBalance({
        ...newBalance,
        total: `${Number(newBalance.income) - Number(newBalance.outcome)}`,
      });
    },
    [balance],
  );

  return (
    <TransactionContext.Provider
      value={{ transactions: data, balance, addTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

function useTransactions(): TransactionContextData {
  const context = useContext(TransactionContext);

  if (!context) {
    throw new Error(
      'useTransactions must be used within an TransactionProvider',
    );
  }

  return context;
}

export { TransactionProvider, useTransactions };
