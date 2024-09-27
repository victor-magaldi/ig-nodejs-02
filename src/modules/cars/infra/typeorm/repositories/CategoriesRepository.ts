import { v4 as uuidv4 } from "uuid";
import { Repository } from "typeorm";

import { dataSource } from "@shared/infra/typeorm";
import {
  ICategoryRepository,
  ICreateCategoryDTO,
} from "@modules/cars/repositories/interfaces/ICategoriesRepository";
import { Category } from "../entities/Category";

// Singleton =>Criação de uma instância global

class CategoriesRepository implements ICategoryRepository {
  private repository: Repository<Category>;
  // private static INSTANCE: CategoriesRepository;

  public constructor() {
    this.repository = dataSource.manager.getRepository(Category);
  }

  // public static getInstance(): CategoriesRepository {
  //   if (!CategoriesRepository.INSTANCE) {
  //     CategoriesRepository.INSTANCE = new CategoriesRepository();
  //   }
  //   return CategoriesRepository.INSTANCE;
  // }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      id: uuidv4(),
      description,
      name,
    });

    await this.repository.save(category);
  }
  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }
  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({ where: { name } });
    return category;
  }
}

export { CategoriesRepository };
