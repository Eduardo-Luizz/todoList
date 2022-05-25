const express = require('express');

const router = express.Router(); // Permite criar rotas em varios arquivos e depois utilizar
const Checklist = require('../models/checklist'); 

router.get('/', (req, res) => {
  console.log('Olá');
  res.send();
})

router.post('/', async (req, res) => {
  let { name } = req.body;

  try {
    let checkList = await Checklist.create({name})
    res.status(200).send(checkList);
  } catch (error) {
    res.status(422).json(error)
  }
  // console.log(name);
})

router.get('/:id', (req,res) => {
  console.log(req.params.id);
  res.send(`ID: ${req.params.id}`);
})

router.put('/:id', (req,res) => {
  console.log(req.body);
  res.send(`PUT ID: ${req.params.id}`);
})

router.delete('/:id', (req,res) => {
  console.log(req.body);
  res.send(`DELETE ID: ${req.params.id}`);
})

module.exports = router;