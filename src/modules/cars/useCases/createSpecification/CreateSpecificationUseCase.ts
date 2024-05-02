import { inject, injectable } from "tsyringe";
import { ISpecificationsRepository } from "../../repositories/interfaces/ISpecificationsRepository";

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
  execute({ description, name }: IRequest) {
    const specificationAlreadyExists = this.specificationRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error("Specification Already exists!");
    }

    this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
