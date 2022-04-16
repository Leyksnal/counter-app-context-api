import React from 'react'
import Counter from './Components/CounterPhase/Counter'
import { GlobalState } from './Components/CounterState/CounterState'

export default function App() {
  return (
    <>
      <GlobalState>
        <Counter/>
      </GlobalState>
    </>
  )
}
