import { Model } from '@nozbe/watermelondb';
import { field, date, relation } from '@nozbe/watermelondb/decorators';
import Category from '../../categories/models/CategoryModel';

export default class Transaction extends Model {
  static table = 'transactions';

  // static associations = {
  //   categories: { type: 'has_many', foreignKey: 'category_id' },
  // };

  @field('title') title: string;

  @field('type') type: string;

  @field('value') value: string;

  @field('category_id') categoryId: string;

  @relation('categories', 'category_id') category: Category;

  @date('created_at') createdAt: number;

  @date('updated_at') updatedAt: number;
}
