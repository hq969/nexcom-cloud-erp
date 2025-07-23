const express = require('express');
const app = express();
app.use(express.json());

const inventory = [
  { id: 1, name: 'Laptop', quantity: 10 },
  { id: 2, name: 'Monitor', quantity: 20 }
];

app.get('/items', (req, res) => {
  res.json(inventory);
});

app.post('/items', (req, res) => {
  const item = req.body;
  inventory.push(item);
  res.status(201).json(item);
});

app.listen(4001, () => console.log('Inventory running on 4001'));
