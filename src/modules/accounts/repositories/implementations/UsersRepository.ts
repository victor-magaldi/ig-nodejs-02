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
  async create({
    name,
    userName,
    email,
    driver_license,
    password,
  }: ICreateUsersDTO): Promise<void> {
    const user = this.repository.create({ name, userName, email, driver_license, password });

    await this.repository.save(user);
  }
}

export { UserRepository };
