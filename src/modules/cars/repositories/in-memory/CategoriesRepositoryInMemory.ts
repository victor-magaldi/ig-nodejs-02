import { Category } from "../../entities/Category";
import { ICategoryRepository, ICreateCategoryDTO } from "../interfaces/ICategoriesRepository";

class CategoriesRepositoryInMemory implements ICategoryRepository {
  categories: Category[] = [];

  findByName(name: string): Promise<Category> {
    throw new Error("Method not implemented.");
  }
  list(): Promise<Category[]> {
    throw new Error("Method not implemented.");
  }
  create({ name, description }: ICreateCategoryDTO): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
