import { Router } from 'express'

import { getTask, createTask, deleteTask, putTask } from './controllers/TaskController.js'

const routes = Router()

routes.get('/task', getTask)
routes.post('/task', createTask)
routes.delete('/task/:id', deleteTask)
routes.put('/task/:id', putTask)

export default routes