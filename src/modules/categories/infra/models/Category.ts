import { Model } from '@nozbe/watermelondb';
import { field, children, date } from '@nozbe/watermelondb/decorators';
import Transaction from '../../../transactions/infra/models/Transaction';

export default class Category extends Model {
  static table = 'categories';

  // static associations = {
  //   transactions: { type: 'has_many', foreignKey: 'category_id' },
  // };

  @field('title') title: string;

  @children('transactions') transactions: Transaction[];

  @date('created_at') createdAt: number;

  @date('updated_at') updatedAt: number;
}
