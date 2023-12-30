//SERVICES
import * as gateServices from '../services/gateServices'
// import { Visibility, Weather } from '../types'


export const allProductsAPI = async (_req: any, res: any): Promise<void> => {
    try {
        res.status(200).send(await gateServices.getAllProducts())
    } catch (error) {
        res.status(500).send('Error: ', error)
    }
}

export const categoryProductsAPI = async (req: any, res: any): Promise<void> => {
    try {
        const category: string = req.params.category
        res.send(await gateServices.getCategoryProducts(category))
    } catch (error) {
        res.status(500).send('Error: ', error)
    }
}

export const signUserAPI = async (req: any, res: any): Promise<void> => {
    const inputForm: Object = req.body
    res.send(await gateServices.signIn(inputForm))
}

// export const findId = (req: any, res: any): void => {
//     const id: number = +req.params.id
//     res.send(gateServices.findById(id))
// }

// export const addEntryDB = (req: any, res: any): void => {

//     const date: string = req.body.date
//     const weather: Weather = req.body.weather
//     const visibility: Visibility = req.body.visibility
//     const comment: string = req.body.comment


//     res.status(201).send(gateServices.addEntry(date, weather, visibility, comment))
// }

// export const delById = (req: any, res: any): void => {
//     const id: number = +req.params.id
//     res.status(200).send(gateServices.delEntry(id))
// }