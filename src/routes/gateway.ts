//DEPENDENCIES
import express from 'express'
//CONTROLLERS
import { allProductsAPI, categoryProductsAPI, signUserAPI } from '../controllers/gateControllers'


const router = express.Router()

//GET ------------------------------------------------------->
router.get('/products', allProductsAPI)
router.get('/products/:category', categoryProductsAPI)

// router.get('/', diaryGetWithoutSensitiveInfo)
// router.get('/:id', findId)

//POST ------------------------------------------------------>
// router.post('/', addEntryDB)
router.post('/signin', signUserAPI)

//DELETE ----------------------------------------------------->
// router.delete('/:id', delById)


export default router