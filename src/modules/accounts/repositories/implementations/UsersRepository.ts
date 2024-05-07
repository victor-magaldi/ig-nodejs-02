import { Repository } from "typeorm";

import { ICreateUsersDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";
import { User } from "../../entities/User";
import { dataSource } from "../../../../database";

class UserRepository implements IUsersRepository {
  private repository: Repository<User>;
  constructor() {
    this.repository = dataSource.manager.getRepository(User);
  }
  async create({ name, email, driver_license, password }: ICreateUsersDTO): Promise<void> {
    const user = this.repository.create({ name, email, driver_license, password });

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
      select: ["id", "email", "name", "password"],
    });

    return user;
  }
}

export { UserRepository };
