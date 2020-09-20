import ITransactionsCollection from '../collections/ITransactionsCollection';
import TransactionsCollection from '../infra/collections/TransactionsCollection';
import Transaction from '../infra/models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface ResponseDto {
  transactions: Transaction[];
  balance: Balance;
}

export default class GetTransactionsService {
  private transactionsCollection: ITransactionsCollection;

  constructor() {
    this.transactionsCollection = new TransactionsCollection();
  }

  public async execute(): Promise<ResponseDto> {
    const transactions = await this.transactionsCollection.get();

    const balance = await this.transactionsCollection.getBalance();

    return { transactions, balance };
  }
}
