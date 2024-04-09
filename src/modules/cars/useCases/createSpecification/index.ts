import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationsRepository = SpecificationsRepository.getInstance();
const specificationsUseCase = new CreateSpecificationUseCase(specificationsRepository);
const specificationsController = new CreateSpecificationController(specificationsUseCase);

export { specificationsController };
