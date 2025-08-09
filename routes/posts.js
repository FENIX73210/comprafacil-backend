const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

// Crear publicación
router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const post = await Post.create(data);
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Listar publicaciones (público)
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().populate('owner', 'name city');
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Obtener publicación por id
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate('owner', 'name city');
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
