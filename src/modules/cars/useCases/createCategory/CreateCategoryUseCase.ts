import { ICategoryRepository } from "../../repositories/interfaces/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoryRepository) { }
  async execute({ description, name }: IRequest): Promise<void> {
    console.log("CreateCategoryUseCase-----11-->", description, name)
    // const categoryAlreadyExist = await this.categoriesRepository.findByName(name);
    // console.log("categoryAlreadyExist-*****---->", categoryAlreadyExist)
    // if (categoryAlreadyExist) {
    //   throw new Error("Category Already exists!");
    // }
    console.log("testando 321")
    await this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
