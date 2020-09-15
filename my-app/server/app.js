const express = require("express");
const rapperData = require("../data/data.json")
const path = require("path");
const db = require("./knex");

const app = express();
app.use(express.json());

app.use(express.static(path.resolve(__dirname, "..", "build")));

// app.get('/api/rappers', (_, res) => {
//     // const results = rapperData.map((element) => {
//     //     return element.latitude = element.location_coordinates[0];
//     //     // element.longitude = element.location_coordinates[1];
//     // } )
//     // for (const rapper of rapperData) {
//     //     results.push(rapper.fields);
//     // }
//     let results = [];
//     // for (let i = 0; i < rapperData.length; i++) {
//     //     let rapper = rapperData[i];
//     //     rapper.latitude = rapper.location_coordinates[0];
//     //     rapper.longitude = rapper.location_coordinates[1];
//     //     results.push(rapper);
//     // }

//     for (let i = 0; i < rapperData.length; i++) {
//         let rapper = rapperData[i];
//         delete rapper.bio_deathdate;
//         delete rapper.bio_yearsactiveend;
//         results.push(rapper);
//     }
//     // console.log('yoyoyo');
//     // console.log(rapperData);
//     res.json(results);
    
// })

app.get('/api/rappers', async (req, res) => {
    try{
        const rapper = await db
        .select()
        .from('rapper_info');
        console.log(rapper[0]);
        res.json(rapper);
    } catch (err) {
        console.log('error')
        res.sendStatus(500);
    }
});

app.get("/api/rappers/:name", async (req, res) => {
    try{
        const name = req.params.name;
        console.log(name);
        const rapper = await db
        .select()
        .where({
            name: name
        })
        .from("rapper_info");
        console.log(`rapper is:${rapper[0].name}`);
        res.json(rapper);
    } catch (err) {
        console.log('error');
        res.sendStatus(500);
    }
});

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