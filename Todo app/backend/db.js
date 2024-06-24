const mongoose = require("mongoose");

// mongodb+srv://Hitesh04:Hitesh@123@clusterhit04.feftlql.mongodb.net//todos
// .env
mongoose.connect("mongodb+srv://Hitesh04:Hitesh@123@clusterhit04.feftlql.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}