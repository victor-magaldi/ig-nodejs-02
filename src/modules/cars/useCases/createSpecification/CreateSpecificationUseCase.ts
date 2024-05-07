import { inject, injectable } from "tsyringe";
import { ISpecificationsRepository } from "../../repositories/interfaces/ISpecificationsRepository";
import { AppError } from "../../../../errors/AppErros";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationRepository: ISpecificationsRepository,
  ) {}
  async execute({ description, name }: IRequest): Promise<void> {
    const specificationAlreadyExists = await this.specificationRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new AppError("Specification Already exists!");
    }

    await this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
