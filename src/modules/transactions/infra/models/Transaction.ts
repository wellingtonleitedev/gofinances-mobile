import { Model } from '@nozbe/watermelondb';
import { field, date, relation } from '@nozbe/watermelondb/decorators';
import Category from '../../../categories/infra/models/Category';

export default class Transaction extends Model {
  static table = 'transactions';

  // static associations = {
  //   category: { type: 'has_one', foreignKey: 'category_id' },
  // };

  @field('title') title: string;

  @field('type') type: string;

  @field('value') value: number;

  @field('category_id') categoryId: string;

  @relation('categories', 'category_id') category: Category;

  @date('created_at') createdAt: number;

  @date('updated_at') updatedAt: number;
}
