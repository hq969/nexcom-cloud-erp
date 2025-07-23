const express = require('express');
const app = express();
app.use(express.json());

let invoices = [];

app.post('/invoice', (req, res) => {
  const invoice = req.body;
  invoices.push(invoice);
  res.status(201).json(invoice);
});

app.get('/invoices', (req, res) => {
  res.json(invoices);
});

app.listen(4002, () => console.log('Finance running on 4002'));
