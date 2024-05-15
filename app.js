const express = require('express')
const app = express()
const  PORT = 1828

app.get('/', (req,res) => {
    res.send('halo')
})

app.listen(PORT, () => {
    console.log('konek ke', PORT)
})

app.use('/', () => {
    
})