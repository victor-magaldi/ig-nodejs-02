import { inject, injectable } from "tsyringe";

import { ICategoryRepository } from "../../repositories/interfaces/ICategoriesRepository";
import { AppError } from "../../../../errors/AppErros";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoryRepository,
  ) {}
  async execute({ description, name }: IRequest): Promise<void> {
    const categoryAlreadyExist = await this.categoriesRepository.findByName(name);

    if (categoryAlreadyExist) {
      throw new AppError("Category Already exists!");
    }

    await this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
