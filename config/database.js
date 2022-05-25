const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//Conectando o mongo com este projeto
mongoose.connect('mongodb://localhost/todo-list', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('Conectado ao mongo'))
  .catch((err) => console.error(err));