import { AppError } from "../../../../errors/AppErros";
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;
let createRepositoryInMemory: CategoriesRepositoryInMemory;

describe("Create Category", () => {
  beforeAll(() => {
    createRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(createRepositoryInMemory);
  });

  it("shoud be able to create a new category", async () => {
    const category = {
      name: "Category Test",
      description: "Category Description TEst",
    };
    await createCategoryUseCase.execute(category);

    const categoryCreated = await createRepositoryInMemory.findByName(category.name);

    expect(categoryCreated).toHaveProperty("id");
  });

  it("shoud be able to create a new category with name exists", async () => {
    expect(async () => {
      const category = {
        name: "Category Test",
        description: "Category Description TEst",
      };
      await createCategoryUseCase.execute(category);
      await createCategoryUseCase.execute(category);
    }).rejects.toBeInstanceOf(AppError);
  });
});
