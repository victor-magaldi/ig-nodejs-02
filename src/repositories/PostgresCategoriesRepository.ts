import { Category } from "../model/Category";
import { ICategoryRepository, ICreateCategoryDTO } from "./ICategoriesRepository";



class PostgresCategoriesRepository implements ICategoryRepository {
  findByName(name: string): Category {
    console.log(name)
    return null
  }
  list(): Category[] {
    return null

  }
  create({ name, description }: ICreateCategoryDTO) {
    console.log(name, description)

    return null
  }

}

export { PostgresCategoriesRepository }