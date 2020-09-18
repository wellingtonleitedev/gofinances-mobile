import ITransactionsCollection from '../collections/ITransactionsCollection';
import TransactionsCollection from '../infra/collections/TransactionsCollection';
import Transaction from '../infra/models/Transaction';

export default class GetTransactionsService {
  private transactionsCollection: ITransactionsCollection;

  constructor() {
    this.transactionsCollection = new TransactionsCollection();
  }

  public async execute(): Promise<Transaction[]> {
    const transactions = await this.transactionsCollection.get();

    return transactions;
  }
}
