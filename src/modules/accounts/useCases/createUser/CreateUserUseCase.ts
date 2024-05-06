import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUsersDTO } from "../../dtos/ICreateUserDTO";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUsersRepository,
  ) {}
  async execute({
    name,
    userName,
    email,
    driver_license,
    password,
  }: ICreateUsersDTO): Promise<void> {
    await this.userRepository.create({
      name,
      userName,
      email,
      driver_license,
      password,
    });
  }
}

export { CreateUserUseCase };
