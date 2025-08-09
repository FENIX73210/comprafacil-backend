const express = require('express');
const Message = require('../models/Message');
const router = express.Router();

// Guardar mensaje
router.post('/message', async (req, res) => {
  try {
    const { roomId, sender, content } = req.body;
    const message = await Message.create({ roomId, sender, content });
    res.json(message);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Obtener mensajes por roomId
router.get('/messages/:roomId', async (req, res) => {
  try {
    const msgs = await Message.find({ roomId }).populate('sender', 'name email');
    res.json(msgs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
