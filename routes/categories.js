const express = require('express');
const router = express.Router();
const Category = require('../models/category');

// POST /categories: Add a new category
router.post('/', async (req, res) => {
  const { name, type } = req.body;
  try {
    const newCategory = new Category({ name, type });
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET /categories: Retrieve all categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
