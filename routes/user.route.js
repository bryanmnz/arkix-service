const express = require('express');
const user = require('../controller/user.controller');
const app = express();

app.get('/user/:id', async(req, res) => {
    var id = req.params.id;
    var response = await user.getById(id);
    res.json(response);
});

app.get('/user', async(req, res) => {

    var response = await user.get();
    res.json(response);
});


app.post('/user', async(req, res) => {
    var data = req.body;
    var response = await user.insert(data);
    res.json(response);
});

app.put('/user/:id', async(req, res) => {
    var data = req.body;
    var id = req.params.id;
    var response = await user.update(id, data);
    res.json(response);
});

app.delete('/user/:id', async(req, res) => {
    var id = req.params.id;
    var response = await user.remove(id);
    res.json(response);
});


module.exports = app;