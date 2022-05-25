const express = require('express');

const router = express.Router(); // Permite criar rotas em varios arquivos e depois utilizar
const Checklist = require('../models/checklist'); 

router.get('/', async (req, res) => {
  try {
    let checkList = await Checklist.find({});
    res.status(200).send(checkList);
  } catch (error) {
    res.status(500).json(error)
  }
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

router.get('/:id', async (req,res) => {
  try {
    let checkList = await Checklist.findById(req.params.id);
    res.status(200).json(checkList);
  } catch (error) {
    res.status(422).json(error)
  }
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