
const express = require('express')
const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
const {getToy, getToys, deleteToy, updateToy, addToy} = require('./toy.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getToys)
router.post('/',requireAuth, requireAdmin, addToy)
router.get('/:id', getToy)
router.put('/:id', updateToy)
router.delete('/:id', requireAuth, requireAdmin, deleteToy)

module.exports = router



// function addToyRoutes(app) {

//     // GET LIST
//     app.get('/api/toy', (req, res) => {
//         const filterBy = req.query;
//         toyService.query(filterBy)
//             .then(toys => {
//                 res.json(toys)
//             })
//     })


//     // GET SINGLE
//     app.get('/api/toy/:id', (req, res) => {
//         const toyId = req.params.id;
//         toyService.getById(toyId)
//             .then(toy => {
//                 res.json(toy)
//             })
//     })

//     // DELETE

//     app.delete('/api/toy/:id', (req, res) => {
//         const toyId = req.params.id;
//         toyService.remove(toyId)
//             .then(() => {
//                 res.end('Done!')
//             })
//             .catch(() =>{
//                 res.status(403).send('not authorizd')
//             })
//     })

//     // CREATE
//     app.post('/api/toy', (req, res) => {
//         const toy = req.body;
//         toyService.save(toy)
//             .then(savedToy => {
//                 res.json(savedToy)
//             })
//     })


//     // UPDATE
//     app.put('/api/toy/:id', (req, res) => {
//         const toy = req.body;
//         toyService.save(toy)
//             .then(savedToy => {
//                 res.json(savedToy)
//             })
//     })

// }
// module.exports = addToyRoutes;