//SERVICES
import * as diaryServices from '../services/diaryServices'
import { Visibility, Weather } from '../types'


export const diaryGetWithoutSensitiveInfo = (_req: any, res: any): void => {
    res.send(diaryServices.getEntriesWithoutSensitiveInfo())
}

export const findId = (req: any, res: any): void => {
    const id: number = +req.params.id
    res.send(diaryServices.findById(id))
}

export const addEntryDB = (req: any, res: any): void => {

    const date: string = req.body.date
    const weather: Weather = req.body.weather
    const visibility: Visibility = req.body.visibility
    const comment: string = req.body.comment


    res.status(201).send(diaryServices.addEntry(date, weather, visibility, comment))
}

export const delById = (req: any, res: any): void => {
    const id: number = +req.params.id
    res.status(200).send(diaryServices.delEntry(id))
}