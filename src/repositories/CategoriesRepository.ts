import { Category } from "../model/Category"

interface ICreateCategoryDTO {
  name: string,
  description: string
}

class CategoriesRepository {
  private categories: Category[]

  constructor() {
    this.categories = []
  }

  create({ name, description }: ICreateCategoryDTO) {
    const category: Category = new Category();
    Object.assign(category, { name, description, date_at: new Date() })

    this.categories.push(category)
  }
  list(): Category[] {
    return this.categories;
  }
  findByName(name: string): Category {
    const category = this.categories.find((category: Category) => category.name === name)
    return category;
  }
}

export { CategoriesRepository }