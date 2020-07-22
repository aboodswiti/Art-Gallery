const express = require('express')
const router = express.Router()
const addArt = require('./postArt')
const login = require('./logIn')
const getArt = require('./getArt')
const getArtist = require('./getArtist')
const signup = require('./signup')
const checkEmail = require('../middlewares/checkEmail')
const recentArt = require('./recentArt')
const artsForArtist = require('./artsForArtist')
const checkAccount = require('./checkAccount')
const getArtAndUser = require('./getArtAndUser')
const uploadImage = require('./uplodeImage')
const clientCart = require('./clientCart')
const addToCart = require('./addToCart')
const deleteCartItem = require('./deleteCartItem')
const getUserId = require('./getUserId')
const serverErr = require('./serverError')
const logout = require('./logout')

router.get('/api/all-art-artist/:id', artsForArtist)
router.get('/api/get-art', getArt)
router.post('/api/signup', checkEmail, signup)
router.post('/api/login', login)
router.post('/api/add-art', addArt)
router.post('/api/checkAccount', checkAccount)
router.get('/api/recent', recentArt)
router.get('/api/artist/:id', getArtist)
router.get('/api/art-user/:id', getArtAndUser)
router.post('/api/upload', uploadImage)
router.get('/api/cart/:id', clientCart)
router.post('/api/add-cart', addToCart)
router.delete('/api/cart/delete', deleteCartItem)
router.get('/api/user-id', getUserId)
router.post('/api/logout', logout)
router.use(serverErr)

module.exports = router
