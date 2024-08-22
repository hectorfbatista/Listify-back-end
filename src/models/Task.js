import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  subTitle: {
    type: String,
    required: false
  },
  completed: {
    type: Boolean,
    required: false
  },
  createdAt: {
    type: String,
    default: Date.now()
  }
})

export default mongoose.model('Task', taskSchema)