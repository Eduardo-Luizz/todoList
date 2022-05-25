const express = require('express');

const router = express.Router(); // Permite criar rotas em varios arquivos e depois utilizar

router.get('/', (req, res) => {
  console.log('Olá');
  res.send();
})

router.post('/', (req, res) => {
  console.log(req.body);
  res.status(200).send(req.body);
})

router.get('/:id', (req,res) => {
  console.log(req.params.id);
  res.send(`ID: ${req.params.id}`);
})
module.exports = router;