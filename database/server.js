const express = require('express')
const path = require("path")
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const CadProduct = require('./typeTable')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => { })


app.post('/api/product', function (req, res) {
        const product = new CadProduct(req, res)

        return res.send({ product })
})



app.listen(3000, console.log('Online'))