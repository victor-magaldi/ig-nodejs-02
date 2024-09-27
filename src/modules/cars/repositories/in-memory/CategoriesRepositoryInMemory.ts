import { v4 as uuidv4 } from "uuid";

import { Category } from "../../infra/typeorm/entities/Category";
import { ICategoryRepository, ICreateCategoryDTO } from "../interfaces/ICategoriesRepository";

class CategoriesRepositoryInMemory implements ICategoryRepository {
  categories: Category[] = [];

  findByName(name: string): Promise<Category> {
    const category = this.categories.find((category) => category.name === name);
    return new Promise((resolve, reject) => {
      try {
        resolve(category);
      } catch (error) {
        reject(error);
      }
    });
  }
  list(): Promise<Category[]> {
    const all = this.categories;

    return new Promise((resolve, reject) => {
      try {
        resolve(all);
      } catch (error) {
        reject(error);
      }
    });
  }
  create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = new Category();

    Object.assign(category, {
      id: uuidv4(),
      name,
      description,
    });

    return new Promise((resolve, reject) => {
      try {
        this.categories.push(category);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }
}

export { CategoriesRepositoryInMemory };
