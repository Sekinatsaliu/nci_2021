// create a server

// add a URL to the web server to do a transfer

// let's use this web server to distribute our tokens

// if there's time, let's add a docker container

let contract = require("./contract.js")

const express = require("express")

const app = express();

app.use(express.json());

const port = 8080;

app.get('/symbol', async(req,res) => {
    res.send(await contract.getSymbol())
})
app.listen(port, () => console.log(`listening on port $(port)...`));

