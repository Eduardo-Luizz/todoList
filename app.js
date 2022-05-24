const express = require('express');
const checkListsRouter = require('./src/routes/checkList');

const app = express();
app.use(express.json()); // chamando midlware

app.use('/checkLists', checkListsRouter);

app.listen(3000, () => {
  console.log('Servidor foi iniciado');
})