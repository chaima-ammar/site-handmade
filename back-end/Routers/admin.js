const express = require('express')
const AdminConrollers=require('../controllers/admin.js')
const router=express.Router()
router.get('/', AdminConrollers.getCard)
router.post('/', AdminConrollers.postCard)
router.delete('/:id',AdminConrollers.deleteCard)
router.patch('/:id',AdminConrollers.patchCard)



module.exports = router;