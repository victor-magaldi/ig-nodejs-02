import { Repository } from "typeorm";

import { dataSource } from "@shared/infra/typeorm";

import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { User } from "../entities/User";
import { ICreateUsersDTO } from "@modules/accounts/dtos/ICreateUserDTO";

class UserRepository implements IUsersRepository {
  private repository: Repository<User>;
  constructor() {
    this.repository = dataSource.manager.getRepository(User);
  }
  async create({
    name,
    email,
    driver_license,
    password,
    id,
    avatar,
  }: ICreateUsersDTO): Promise<void> {
    const user = this.repository.create({ name, email, driver_license, password, id, avatar });

    await this.repository.save(user);
  }
  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({
      where: {
        email,
      },
      select: ["id", "email", "name", "password"],
    });

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne({
      where: {
        id,
      },
      select: ["id", "email", "name", "password", "avatar"],
    });

    return user;
  }
}

export { UserRepository };
