import Category from '../infra/models/Category';

export default interface ICategoriesCollection {
  getByTitle(name: string): Promise<Category[]>;
  create(title: string): Promise<Category>;
}
