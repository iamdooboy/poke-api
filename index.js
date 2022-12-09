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
	const pokemon = data.find(p => {
		if (p.id === req.params.id) {
			return p.id === req.params.id
		}

		return p.name === req.params.id
	})
	if (!pokemon) return res.status(404).send('Pokemon not found')
	res.status(200).send(pokemon)
})

app.get('/api/gen/:id', (req, res) => {
	if (req.params.id === '1') {
		return res.status(200).send(data.slice(0, 151))
	} else if (req.params.id === '2') {
		return res.status(200).send(data.slice(151, 251))
	} else if (req.params.id === '3') {
		return res.status(200).send(data.slice(251, 386))
	} else if (req.params.id === '4') {
		return res.status(200).send(data.slice(386, 493))
	} else if (req.params.id === '5') {
		return res.status(200).send(data.slice(493, 649))
	} else if (req.params.id === '6') {
		return res.status(200).send(data.slice(649, 721))
	} else if (req.params.id === '7') {
		return res.status(200).send(data.slice(721, 809))
	} else if (req.params.id === '8') {
		return res.status(200).send(data.slice(809, 905))
	}

	res.status(404).send('Generation not found')
})

app.listen(port)
