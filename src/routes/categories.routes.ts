import { Router } from "express"
import { v4 as uuidv4 } from "uuid"

const categoriesRoutes = Router()

const categories = []
categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body

  categories.push({ name, description, id: uuidv4() })

  return response.status(201).send()
})


export { categoriesRoutes }