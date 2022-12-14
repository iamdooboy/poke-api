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
	credentials: true, //access-control-allow-credentials:true
	optionSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(express.json())

// router.get('/', (req, res) => {
// 	res.setHeader('Access-Control-Allow-Origin', '*')
// 	res.setHeader('Access-Control-Allow-Credentials', 'true')
// 	res.setHeader('Access-Control-Max-Age', '1800')
// 	res.setHeader('Access-Control-Allow-Headers', 'content-type')
// 	res.setHeader(
// 		'Access-Control-Allow-Methods',
// 		'PUT, POST, GET, DELETE, PATCH, OPTIONS'
// 	)
// })

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

app.listen(PORT)
