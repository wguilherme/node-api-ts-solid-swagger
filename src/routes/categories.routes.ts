import { randomUUID as uuid } from 'crypto';
import { Router } from 'express';

const categoriesRoutes = Router()

const categories = [];

categoriesRoutes.post('/', (request, response)=>{
  const {name, description}= request.body  

  const category = {
    id: uuid(),
    name,
    description
  }

  categories.push(category)

  return response.status(201).send()
})


export { categoriesRoutes };

