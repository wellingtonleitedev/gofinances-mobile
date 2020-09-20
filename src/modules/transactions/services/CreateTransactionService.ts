import { Alert } from 'react-native';
import CreateCategoryService from '../../categories/services/CreateCategoryService';
import ITransactionsCollection from '../collections/ITransactionsCollection';
import TransactionsCollection from '../infra/collections/TransactionsCollection';
import Transaction from '../infra/models/Transaction';

interface CreateTransactionDto {
  title: string;
  type: string;
  value: number;
  category: string;
}

export default class CreateTransactionService {
  private transactionsCollection: ITransactionsCollection;

  private createCategoryService: CreateCategoryService;

  constructor() {
    this.transactionsCollection = new TransactionsCollection();
    this.createCategoryService = new CreateCategoryService();
  }

  public async execute({
    title,
    type,
    value,
    category,
  }: CreateTransactionDto): Promise<Transaction> {
    const newCategory = await this.createCategoryService.execute(category);

    const { total } = await this.transactionsCollection.getBalance();

    if (type === 'outcome' && value > total) {
      Alert.alert(
        'Não foi possível completar a transação!',
        'Você não possui saldo suficiente',
      );

      throw new Error();
    }

    const transaction = await this.transactionsCollection.create({
      title,
      type,
      value: Number(value),
      categoryId: newCategory.id,
    });

    return transaction;
  }
}
