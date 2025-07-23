const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const app = express();
app.use(express.json());

const users = [{ id: 1, username: 'admin', password: 'password', role: 'admin' }];

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.sendStatus(401);
  const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET);
  res.json({ token });
});

app.listen(4000, () => console.log('Auth running on 4000'));
