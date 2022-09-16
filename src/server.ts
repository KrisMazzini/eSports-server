import express, { request } from 'express'

const app = express()

app.get('/games', (req, res) => {
    return res.json([])
})

app.post('/ads', (req, res) => {
    return res.json([])
})

app.get('/games/:id/ads', (req, res) => {
    // const gameId = request.params.id;

    return res.json([
        { id: 1, name: "Anúncio 1" },
        { id: 2, name: "Anúncio 2" },
        { id: 3, name: "Anúncio 3" },
        { id: 4, name: "Anúncio 4" },
        { id: 5, name: "Anúncio 5" },
    ])
})

app.get('/ads/:id/discord', (req, res) => {
    // const adId = request.params.id;
    
    return res.json([])
})

app.listen(8080)