import React, { useState, createContext} from 'react'


export const CountState = createContext()

export const GlobalState = ({children})=>{

    const [num, setnum] = useState(2)

    const addCount =()=>{
        setnum(num + 1)
    }
    const subCount =()=>{
        setnum(num - 1)
    }
    const divideCount =()=>{
        setnum(num / 2)
    }
    const multiplyCount =()=>{
        const rnd = Math.random()
        setnum(num * rnd)
    }

    return (
        <CountState.Provider value={{num, addCount, subCount, divideCount, multiplyCount}}>
            {children}
        </CountState.Provider>
    )
}