import { v4 as uuidv4 } from "uuid";
import { Repository } from "typeorm";

import { dataSource } from "@shared/infra/typeorm";

import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "@modules/cars/repositories/interfaces/ISpecificationsRepository";
import { Specification } from "../entities/Specification";

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;
  // private static INSTANCE: SpecificationsRepository;

  public constructor() {
    this.repository = dataSource.manager.getRepository(Specification);
  }
  // public static getInstance(): SpecificationsRepository {
  //   if (!SpecificationsRepository.INSTANCE) {
  //     SpecificationsRepository.INSTANCE = new SpecificationsRepository();
  //   }
  //   return SpecificationsRepository.INSTANCE;
  // }

  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({
      id: uuidv4(),
      description,
      name,
    });

    await this.repository.save(specification);
  }
  async list(): Promise<Specification[]> {
    const specifications = await this.repository.find();
    return specifications;
  }
  async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOne({ where: { name } });
    return specification;
  }
}

export { SpecificationsRepository };
