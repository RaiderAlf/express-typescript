//DEPENDENCIES
import express from 'express'
//CONTROLLERS
import { diaryGetWithoutSensitiveInfo, findId, addEntryDB, delById } from '../controllers/diaryControllers'


const router = express.Router()

//GET ------------------------------------------------------->
router.get('/', diaryGetWithoutSensitiveInfo)
router.get('/:id', findId)

//POST ------------------------------------------------------>
router.post('/', addEntryDB)

//DELETE ----------------------------------------------------->
router.delete('/:id', delById)


export default router