const mongoose = require("mongoose");

// mongodb+srv://Hitesh04:Hitesh@123@clusterhit04.feftlql.mongodb.net//todos
// .env

const username = 'Hitesh04';
const password = encodeURIComponent('Hitesh@123'); // Encoding the password
const cluster = 'clusterhit04.feftlql.mongodb.net';
const dbname = 'todos';

const uri = `mongodb+srv://${username}:${password}@${cluster}/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err.message);
});

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}