const express = require('express');
const { authenticateToken, authorizeRole } = require('../middleware/auth');
const router = express.Router();

router.get(
  '/dashboard',
  authenticateToken,
  authorizeRole(['admin']),
  (req, res) => {
    res.json({ message: 'Welcome Admin!' });
  }
);

router.get(
  '/user-dashboard',
  authenticateToken,
  authorizeRole(['user', 'admin']),
  (req, res) => {
    res.json({ message: 'Welcome User!' });
  }
);

module.exports = router;
