const express = require('express');

const router = express.Router(); // Permite criar rotas em varios arquivos e depois utilizar
const Checklist = require('../models/checklist'); 

router.get('/', async (req, res) => {
  try {
    let checkLists = await Checklist.find({});
    // res.status(200).send(checkList);
    res.status(200).render('checklists/index', {checkLists: checkLists}); // => retorna a página
  } catch (error) {
    // res.status(500).json(error)
    res.status(200).render('pages/error', {error: 'Erro ao exibir as listas'});
  }
})

router.get('/new', async(req, res) => {
  try {
    let checkList = new Checklist();
    res.status(200).render('checkLists/new', {checkList: checkList})
  } catch (error) {
    res.status(500).render('pages/error', { errors: 'Erro ao carregar o formulário' })
  }
})

router.post('/', async (req, res) => {
  let { name } = req.body.checkList;
  let checkList = new Checklist({ name })
  try {
    await checklist.save();
    res.redirect('/checkLists');
  } catch (error) {
    res.status(422).render('checkLists/new', {checkLists: {...checkList, error}});
  }
})

router.get('/:id', async (req,res) => {
  try {
    let checkList = await Checklist.findById(req.params.id);
    res.status(200).render('checklists/show', {checkList: checkList}); // => retorna a página
    // res.status(200).json(checkList);
  } catch (error) {
    res.status(500).render('pages/error', {error: 'Erro ao exibir as listas de tarefas'});
    // res.status(422).json(error)
  }
})

router.put('/:id', async (req,res) => {
  try {
    let { name } = req.body;
    let checkList = await Checklist.findByIdAndUpdate(req.params.id, {name}, {new: true});
    res.status(200).json(checkList);
  } catch (error) {
    res.status(422).json(error);
  }
})

router.delete('/:id', async (req,res) => {
  try {
    let checkList = await Checklist.findByIdAndRemove(req.params.id);
    res.status(200).json(checkList);
  } catch (error) {
    res.status(422).json(error);
  }
})

module.exports = router;