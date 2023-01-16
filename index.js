import cors from 'cors'
import express from 'express'
import { readFile } from 'fs/promises'
import * as dotenv from 'dotenv'
dotenv.config()
const data = JSON.parse(await readFile('./data.json'))

const app = express()
const PORT = process.env.PORT || 5000

const corsOptions = {
	origin: '*',
	credentials: true,
	optionSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(express.json())

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
	if (req.params.id === '1') return res.status(200).send(data.slice(0, 151))

	if (req.params.id === '2') return res.status(200).send(data.slice(151, 251))

	if (req.params.id === '3') return res.status(200).send(data.slice(251, 386))

	if (req.params.id === '4') return res.status(200).send(data.slice(386, 493))

	if (req.params.id === '5') return res.status(200).send(data.slice(493, 649))

	if (req.params.id === '6') return res.status(200).send(data.slice(649, 721))

	if (req.params.id === '7') return res.status(200).send(data.slice(721, 809))

	if (req.params.id === '8') return res.status(200).send(data.slice(809, 905))

	if (req.params.id === '9') return res.status(200).send(data.slice(905, 1008))

	res.status(404).send('Generation not found')
})

app.listen(PORT)
