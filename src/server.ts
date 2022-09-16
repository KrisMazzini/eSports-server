import express, { request } from 'express'
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient({
    log: ['query']
})

app.get('/games', async (req, res) => {
    const games = await prisma.game.findMany({
        include: {
            _count: {
                select: {
                    ads: true,
                }
            }
        }
    })
    return res.json(games)
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