const express = require("express");
const rapperData = require("../data/data.json")
const path = require("path");

const app = express();
app.use(express.json());

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get('/api/rappers', (_, res) => {
    // const results = rapperData.map((element) => {
    //     return element.latitude = element.location_coordinates[0];
    //     // element.longitude = element.location_coordinates[1];
    // } )
    // for (const rapper of rapperData) {
    //     results.push(rapper.fields);
    // }
    let results = [];
    // for (let i = 0; i < rapperData.length; i++) {
    //     let rapper = rapperData[i];
    //     rapper.latitude = rapper.location_coordinates[0];
    //     rapper.longitude = rapper.location_coordinates[1];
    //     results.push(rapper);
    // }

    for (let i = 0; i < rapperData.length; i++) {
        let rapper = rapperData[i];
        delete rapper.bio_deathdate;
        delete rapper.bio_yearsactiveend;
        results.push(rapper);
    }
    // console.log('yoyoyo');
    // console.log(rapperData);
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