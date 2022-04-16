import {createContext} from 'react'


export const CountState = createContext()

export const GlobalState = ({children})=>{
    return (
        <CountState.Provider value={"Bello is here"}>
            {children}
        </CountState.Provider>
    )
}