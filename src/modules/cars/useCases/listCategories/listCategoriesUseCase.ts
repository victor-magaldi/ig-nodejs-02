import { inject, injectable } from "tsyringe";

import { Category } from "@modules/cars/infra/typorm/entities/Category";
import { ICategoryRepository } from "@modules/cars/repositories/interfaces/ICategoriesRepository";

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoryRepository,
  ) {}
  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.list();

    return categories;
  }
}

export { ListCategoriesUseCase };
