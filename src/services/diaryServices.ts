//TYPES
import { DiaryEntry, NonSensitiveInfoDiary, Visibility, Weather } from '../types';
//DB
import diaryData from './diaries.json';


const diaries: DiaryEntry[] = diaryData as DiaryEntry[]


export const getAllEntries = (): DiaryEntry[] => diaries

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiary[] => {
    console.log(diaries.length)
    return diaries.map(({ id, date, weather, visibility }) => {
        return {
            id,
            date,
            weather,
            visibility
        }
    })
}

export const findById = (id: number): DiaryEntry | undefined => {

    const entry = diaries.find(d => d.id === id)

    return entry
}

export const addEntry = (date: string, weather: Weather, visibility: Visibility, comment: string): DiaryEntry[] | undefined => {
    const id: number = diaries.length
    const entry = {
        id: id + 1,
        date,
        weather,
        visibility,
        comment
    }
    diaries.push(entry)
    return diaries
};

export const delEntry = (id: number): DiaryEntry[] => {

    diaries.splice(
        diaries.findIndex(i => i.id === id), 1
    )

    return diaries
}