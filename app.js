const express = require('express');
const path = require('path');

const checkListsRouter = require('./src/routes/checkList');
const rootRouter = require('./src/routes/index');

//Importando a config
require('./config/database');


const app = express();
app.use(express.json()); // chamando midlware

app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

app.use('/', rootRouter);
app.use('/checkLists', checkListsRouter);

app.listen(3000, () => {
  console.log('Servidor foi iniciado');
})