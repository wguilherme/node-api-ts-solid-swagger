import express from 'express'
import { categoriesRoutes } from './routes/categories.routes'

const app = express()
app.use(express.json())

app.use("/categories", categoriesRoutes)

app.get('/', (req, res)=>res.json('works'))

app.post('/courses', (request, response)=>{
  const {name} = request.body
  response.json({name})
})

app.listen(3333, ()=>console.log('Server is runnning at port 3333'))