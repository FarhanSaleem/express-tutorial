const express = require('express');
const app = express()

let { people} = require('./data');

//static assets
app.use(express.static('./methods-public'));

app.get('/api/people', (req, res) => {
    res.status(200).json({success: true, data: people})
});

app.post('/login', (req, res) => {
    console.log(req);
    const { name } = req.body;
    if (name) {
        res.status(200).send(`Welcome ${name}`);
    }
    
    res.status(401).send('Unauthorized');
    
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000....');
})

