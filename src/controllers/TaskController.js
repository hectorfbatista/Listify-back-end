import Task from "../models/Task.js";

async function getTask(request, response) {
    const tasks = await Task.find()

    response.header('Acess-Control-Allow-Origin', '*');

    return response.status(200).json(tasks)
}

async function createTask(request, response) {
    const task = request.body

    const newTask = await Task.create(task)

    return response.status(200).json([newTask])
}

async function deleteTask(request, response) {
    const id = request.params.id

    await Task.findByIdAndDelete({ _id: id })

    return response.status(200).json({ response: "Tarefa deletada"})
}

async function putTask(request, response) {
    const id = request.params.id

    const {title, subTitle, completed} = request.body

    await Task.findOneAndUpdate({ _id: id }, {title, subTitle, completed})

    return response.status(200).json({ response: "Tarefa alterada"})
}

export { getTask, createTask, deleteTask, putTask}