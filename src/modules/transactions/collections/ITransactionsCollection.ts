import Transaction from '../infra/models/Transaction';

interface CreateTransactionDto {
  title: string;
  type: string;
  value: number;
  categoryId: string;
}

export default interface ITransactionsCollection {
  get(): Promise<Transaction[]>;
  create(data: CreateTransactionDto): Promise<Transaction>;
}
