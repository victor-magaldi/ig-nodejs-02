import { ICategoryRepository } from "../repositories/ICategoriesRepository"

interface IRequest {
  name: string,
  description: string
}

class CreateCategoryService {

  constructor(private categoriesRepository: ICategoryRepository) {
  }
  execute({ description, name }: IRequest) {
    const categoryAlreadyExist = this.categoriesRepository.findByName(name)

    if (categoryAlreadyExist) {
      throw new Error("Category Already exists!")
    }

    this.categoriesRepository.create({ name, description })
  }
}

export { CreateCategoryService }