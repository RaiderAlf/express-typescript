export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
export type Visibility = 'great' | 'good' | 'ok' | 'poor'

export interface DiaryEntry {
    id: number
    date: string
    weather: Weather
    visibility: Visibility
    comment: string
}

// export type NonSensitiveInfoDiary = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>

export type NonSensitiveInfoDiary = Omit<DiaryEntry, 'comment'>