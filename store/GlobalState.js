import { createContext, useReducer, useEffect } from 'react'
import reducers from './Reducers'
import { getData } from '../utils/fetchData'


export const DataContext = createContext()


export const DataProvider = ({children}) => {
    const initialState = {
        notify: {}, auth: {},cart:[],modal{}
    }

    const [state, dispatch] = useReducer(reducers, initialState)
    const {  auth } = state






    return(
        <DataContext.Provider value={{state, dispatch}}>
    {children}
</DataContext.Provider>
)
}