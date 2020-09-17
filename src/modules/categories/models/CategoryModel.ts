import { Model } from '@nozbe/watermelondb';
import { field, date } from '@nozbe/watermelondb/decorators';

export default class Category extends Model {
  static table = 'categories';

  // static associations = {
  //   transactions: { type: 'belongs_to', key: 'category_id' },
  // };

  @field('title') title: string;

  @date('created_at') createdAt: number;

  @date('updated_at') updatedAt: number;
}
