import express from 'express'
import data from '../data.js'
const router = express.Router()

router.route('/:id').get((req, res) => {
	const pokemon = data.find(p => p.id === parseInt(req.params.id))
	if (!pokemon) return res.status(404).send('Pokemon not found')
	res.status(200)
})

export default router
