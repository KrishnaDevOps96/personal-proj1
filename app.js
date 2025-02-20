const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

app.get('/', (req, res) => {
  res.send('Hello, test app by Saikrishna Bethamcharla!');
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const newUser = { id: users.length + 1, name: req.body.name };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');
  user.name = req.body.name;
  res.json(user);
});

app.delete('/users/:id', (req, res) => {
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  if (userIndex === -1) return res.status(404).send('User not found');
  const deletedUser = users.splice(userIndex, 1);
  res.json(deletedUser);
});

app.listen(port, '0.0.0.0', () => {
  console.log(`App running at http://0.0.0.0:${port}`);
});
