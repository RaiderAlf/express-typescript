//DEPENDENDIES
import axios, { AxiosResponse } from 'axios';
//TYPES
import { Products, User } from '../types';
// //DB
// import diaryData from './diaries.json';


// const diaries: DiaryEntry[] = diaryData as DiaryEntry[]


// export const getAllEntries = (): DiaryEntry[] => diaries

// export const findById = (id: number): DiaryEntry | undefined => {

//     const entry = diaries.find(d => d.id === id)

//     return entry
// }


// export const delEntry = (id: number): DiaryEntry[] => {

//     diaries.splice(
//         diaries.findIndex(i => i.id === id), 1
//     )

//     return diaries
// }

export const getAllProducts = async (): Promise<Products[] | undefined | void> => {
    try {
        const response: AxiosResponse = await axios.get('https://fakestoreapi.com/products');
        return response.data;
    } catch (error) {
        return console.error(error);
    }
}

export const getCategoryProducts = async (category: string): Promise<Products[] | undefined> => {
    let products: Products[] | undefined
    try {
        const response: AxiosResponse = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
        products = response.data
    } catch (error) {
        console.error(error)
    }
    return products
}

export const signIn = async (bodyInput: Object): Promise<User[] | undefined | void> => {
    try {
        const response: AxiosResponse = await axios.post(`https://microservices-api.onrender.com/signin`, bodyInput)
        return response.data

    } catch (error: any) {
        console.error(error)
        throw error
    }
}