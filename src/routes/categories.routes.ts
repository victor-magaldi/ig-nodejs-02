import { Router } from "express"

import { Category } from "../model/Category"
import { CategoriesRepository } from "../repositories/CategoriesRepository"

const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post("/", (request, response) => {
  const { name, description }: Category = request.body
  const categoryAlreadyExist = categoriesRepository.findByName(name)

  if (categoryAlreadyExist) {
    return response.status(400).json({ erro: "Category Already exists!" })
  }

  categoriesRepository.create({ name, description })
  return response.status(201).send()
})
categoriesRoutes.get("/", (request, response) => {
  const allCategories = categoriesRepository.list()

  return response.json(allCategories)
})


export { categoriesRoutes }