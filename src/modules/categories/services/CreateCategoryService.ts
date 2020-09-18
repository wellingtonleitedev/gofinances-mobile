import ICategoriesCollection from '../collections/ICategoriesCollection';
import CategoriesCollection from '../infra/collections/CategoriesCollection';
import Category from '../infra/models/Category';

export default class CreateCategoryService {
  private categoriesCollection: ICategoriesCollection;

  constructor() {
    this.categoriesCollection = new CategoriesCollection();
  }

  public async execute(title: string): Promise<Category> {
    const categories = await this.categoriesCollection.getByTitle(title);

    if (categories.length) {
      return categories[0];
    }

    const category = await this.categoriesCollection.create(title);

    return category;
  }
}
