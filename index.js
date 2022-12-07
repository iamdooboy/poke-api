import data from './data.js'
import cors from 'cors'
import express from 'express'
const app = express()
const port = 8080

app.use(cors())

app.get('/api/pokemon', (req, res) => {
	res.status(200).send(data)
})

app.get('/api/pokemon/:id', (req, res) => {
	const pokemon = data.find(p => p.id === parseInt(req.params.id))
	if (!pokemon) return res.status(404).send('Pokemon not found')
	res.status(200).send(pokemon)
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
