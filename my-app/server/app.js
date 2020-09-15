const express = require("express");
const rapperData = require("../data/data.json")
const path = require("path");

const app = express();
app.use(express.json());

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get('/api/rappers', (req, res) => {
    const results = [];
    for (const rapper of rapperData) {
        results.push(rapper.fields);
    }
    res.json(results);
})

app.get('/api/rappers/:name', (req, res) => {
    const name = req.params.name;
    for (let i = 0; i < rapperData.length; i++) {
        const rapper = rapperData[i]; 
        if (rapper.fields.name === name) {
            res.json(rapper);
        }
    }
})

app.get('/api/rappers/location/:name', (req, res) => {
    const name = req.params.name;
    for (let i = 0; i < rapperData.length; i++) {
        const rapper = rapperData[i]; 
        if (rapper.fields.name === name) {
            res.json(rapper.fields.location_coordinates);
        }
    }
})

module.exports = app;