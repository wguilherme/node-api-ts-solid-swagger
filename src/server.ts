import express from 'express'

const app = express()

app.get('/', (req, res)=>res.json('works'))

app.listen(3333, ()=>console.log('Server is runnning at port 3333'))