const express = require('express');
const app = express();

app.get('/api/customers', (req, res) =>{
    const customers =[
        {id:1, firstName: 'John', lastName: 'Carter'},
        {id:2, firstName: 'Harry', lastName: 'Porter'},
        {id:3, firstName: 'Steve', lastName: 'Smith'}
    ];

    res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log('server listening on port 5000'));