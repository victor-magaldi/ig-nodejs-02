import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { deleteFile } from "@utils/file";

interface IRequest {
  user_id: string;
  avatar_file: string;
}

@injectable()
class UpdateUserAvatarUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUsersRepository,
  ) {}
  async execute({ user_id, avatar_file }: IRequest): Promise<void> {
    const user = await this.userRepository.findById(user_id);
    if (user.avatar) {
      await deleteFile(`./tmp/avatar/${user.avatar}`);
    }
    user.avatar = avatar_file;

    await this.userRepository.create(user);
  }
}

export { UpdateUserAvatarUseCase };
