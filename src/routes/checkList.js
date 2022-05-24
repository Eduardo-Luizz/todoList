const express = require('express');

const router = express.Router(); // Permite criar rotas em varios arquivos e depois utilizar

router.get('/', (req, res) => {
  console.log('Olá');
  res.send();
})

module.exports = router;