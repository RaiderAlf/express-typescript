export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
export type Visibility = 'great' | 'good' | 'ok' | 'poor'
export type Category = "men's clothing" | "jewelery" | "electronics" | "women's clothing"

export interface DiaryEntry {
    id: number
    date: string
    weather: Weather
    visibility: Visibility
    comment: string
    rating: {
        rate: number,
        count: number
    }
}

export interface Products {
    id: number
    title: string
    price: number
    category: Category
    description: string
    image: string
}

export interface User {
    id: string
    firstname: string
    lastname: string
    email: string
    deleted: boolean
    password: string
}

// export type NonSensitiveInfoDiary = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>

export type NonSensitiveInfoDiary = Omit<DiaryEntry, 'comment'>