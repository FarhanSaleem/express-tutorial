const express = require('express');
const path = require('path');
const app = express();

// setup static and middleware
app.use(express.static('./public'));

//app.use(e)
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
    // adding to static assets
    // using Service Side Rendering
})

app.all('*', (req, res) => {
    res.status(404).send('resource not found');
})

app.listen(3000, () => {
    console.log('server is listeing on port 3000...')
})