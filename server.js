const express = require('express');
const app = express();
const port = 3000;

let foods = [ { id: 1, name: 'Pizza', cuisine: 'Italian', price: 9.99 }, { id: 2, name: 'Sushi', cuisine: 'Japanese', price: 12.99 }, { id: 3, name: 'Tacos', cuisine: 'Mexican', price: 7.99 }, { id: 4, name: 'Pad Thai', cuisine: 'Thai', price: 10.99 }, { id: 5, name: 'Burger', cuisine: 'American', price: 8.99 } ];

app.use(express.static('public'));

app.get('/data', (req, res) => {
    res.json(foods);
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})