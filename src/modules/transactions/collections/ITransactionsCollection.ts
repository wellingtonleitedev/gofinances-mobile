import Transaction from '../infra/models/Transaction';

interface CreateTransactionDto {
  title: string;
  type: string;
  value: number;
  categoryId: string;
}

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

export default interface ITransactionsCollection {
  get(): Promise<Transaction[]>;
  getBalance(): Promise<Balance>;
  create(data: CreateTransactionDto): Promise<Transaction>;
}
