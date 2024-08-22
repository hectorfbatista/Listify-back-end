import express from "express"
import cors from 'cors'

import connectDataBase from "./database/db.js"
import routes from './routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

connectDataBase()
  .then( () => {
    app.listen(3000, () => console.log("Servidor rodando e banco de dados conectado"))
  })
  .catch( (error) => console.log(error))