const express = require('express');
const app = express();
app.use(express.json());

let employees = [];

app.post('/employee', (req, res) => {
  const emp = req.body;
  employees.push(emp);
  res.status(201).json(emp);
});

app.get('/employees', (req, res) => {
  res.json(employees);
});

app.listen(4003, () => console.log('HR running on 4003'));
