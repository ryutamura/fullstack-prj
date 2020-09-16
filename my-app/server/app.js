const express = require("express");
const rapperData = require("../data/data.json")
const path = require("path");
const db = require("./knex");

const app = express();
app.use(express.json());

app.use(express.static(path.resolve(__dirname, "..", "build")));


app.get('/api/rappers', async (_, res) => {
    try{
        const rapper = await db
        .select()
        .from('rapper_info');
        res.json(rapper);
    } catch (err) {
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
        res.json(rapper[0]);
    } catch (err) {
        console.log('error');
        res.sendStatus(500);
    }
});


module.exports = app;