import { Collection, Q } from '@nozbe/watermelondb';
import database from '../../../../config/database';
import ICategoriesCollection from '../../collections/ICategoriesCollection';
import Category from '../models/Category';

export default class CategoriesCollection implements ICategoriesCollection {
  private collection: Collection<Category>;

  constructor() {
    this.collection = database.collections.get('categories');
  }

  public async getByTitle(title: string): Promise<Category[]> {
    const category = await this.collection
      .query(Q.where('title', title))
      .fetch();

    return category;
  }

  public async create(title: string): Promise<Category> {
    let newCategory = {} as Category;

    await database.action(async () => {
      newCategory = await this.collection.create(category => {
        Object.assign(category, { title });
      });
    });

    return newCategory;
  }
}
