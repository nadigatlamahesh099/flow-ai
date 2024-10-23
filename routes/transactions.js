const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

// POST /transactions: Add a new transaction
router.post('/add-transaction', async (req, res) => {
  const { type, category, amount, date, description } = req.body;
  try {
    const newTransaction = new Transaction({ type, category, amount, date, description });
    await newTransaction.save();
    res.status(201).json(newTransaction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET /transactions: Retrieve all transactions
router.get('/all-transactions', async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /transactions/:id: Retrieve a specific transaction
router.get('/:id', async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) return res.status(404).json({ error: 'Transaction not found' });
    res.status(200).json(transaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT /transactions/:id: Update a specific transaction
router.put('/:id', async (req, res) => {
  try {
    const updatedTransaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTransaction) return res.status(404).json({ error: 'Transaction not found' });
    res.status(200).json(updatedTransaction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE /transactions/:id: Delete a transaction
router.delete('/:id', async (req, res) => {
  try {
    const deletedTransaction = await Transaction.findByIdAndDelete(req.params.id);
    if (!deletedTransaction) return res.status(404).json({ error: 'Transaction not found' });
    res.status(200).json({ message: 'Transaction deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /summary: Get transaction summary
router.get('/summary', async (req, res) => {
  const { startDate, endDate, category } = req.query;
  console.log(startDate,endDate,category);
  const filter = {};
  if (startDate) filter.date = { $gte: new Date(startDate) };
  if (endDate) filter.date = { ...filter.date, $lte: new Date(endDate) };
  if (category) filter.category = category;

  try {
    const transactions = await Transaction.find(filter);
    const totalIncome = transactions.filter(t => t.type === 'income').reduce((acc, t) => acc + t.amount, 0);
    const totalExpense = transactions.filter(t => t.type === 'expense').reduce((acc, t) => acc + t.amount, 0);
    const balance = totalIncome - totalExpense;
    res.status(200).json({ totalIncome, totalExpense, balance });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
