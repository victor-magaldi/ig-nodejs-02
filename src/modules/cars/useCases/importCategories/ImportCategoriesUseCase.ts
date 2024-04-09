import fs from "fs"
import { parse as csvParse } from "csv-parse";

import { ICategoryRepository } from "../../repositories/interfaces/ICategoriesRepository";

interface ImportCategory {
  name: string,
  description: string
}

class ImportCategoriesUseCase {
  constructor(private categoriesRepository: ICategoryRepository) {
  }

  loadCategories(file: Express.Multer.File): Promise<ImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path)
      const categories: ImportCategory[] = []

      const parseFile = csvParse()
      stream.pipe(parseFile)

      parseFile.on("data", async (line) => {
        const [name, description] = line;
        categories.push({
          name, description
        })
      }).on("end", () => {
        resolve(categories)
      }).on("error", (err) => {
        reject(err)
      })
    })
  }
  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file)
    console.log(categories)
  }
}

export { ImportCategoriesUseCase }