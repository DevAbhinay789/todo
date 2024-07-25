import mongoose from "mongoose";
import User from "./user.model.js";

const TodoSchema = new mongoose.Schema({
     title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
},{
    timestamps:true,
})

const todo = mongoose.model('todo', TodoSchema);

export default todo;