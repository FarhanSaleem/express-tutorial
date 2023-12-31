const express = require ('express')
const app = express()
const { products } = require('./data');

app.get('/', (req, res) => {
    res.json(products);
})

app.listen(3000, () => {
    console.log('server is listeing on port 3000...')
})