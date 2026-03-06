const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.static(__dirname));
app.use(express.json());

let dashboardData = null;

app.get('/api/data', (req, res) => {
  if (dashboardData) return res.json(dashboardData);
  res.json({ saved: false });
});

app.post('/api/data', (req, res) => {
  dashboardData = req.body;
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`Design System Dashboard running at http://localhost:${PORT}`);
});
