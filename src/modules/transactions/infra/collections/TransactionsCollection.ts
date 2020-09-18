import { Collection } from '@nozbe/watermelondb';
import database from '../../../../config/database';
import ITransactionsCollection from '../../collections/ITransactionsCollection';
import Transaction from '../models/Transaction';

interface CreateTransactionDto {
  title: string;
  type: string;
  value: number;
  categoryId: string;
}

export default class TransactionsCollection implements ITransactionsCollection {
  private collection: Collection<Transaction>;

  constructor() {
    this.collection = database.collections.get('transactions');
  }

  public async get(): Promise<Transaction[]> {
    const transactions = await this.collection.query().fetch();

    return transactions;
  }

  public async create({
    title,
    type,
    value,
    categoryId,
  }: CreateTransactionDto): Promise<Transaction> {
    let newTransaction = {} as Transaction;

    await database.action(
      async (): Promise<void> => {
        newTransaction = await this.collection.create(transaction => {
          Object.assign(transaction, { title, type, value, categoryId });
        });
      },
    );

    return newTransaction;
  }
}
