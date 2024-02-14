const express = require('express')
const app = express()
const port = 3000
var cors = require('cors');
let chef = require('./chef.json')
app.use(cors());

app.get('/', (req, res) => {
  res.send('chef hunter!')
})
app.get('/chef', (req, res) => {
  res.send(chef)
})

app.get('/chef/:id', (req, res) => {
  let id = req.params.id;
  let chefsdetail = chef.filter(c => c.id == id);
  res.send(chefsdetail)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})