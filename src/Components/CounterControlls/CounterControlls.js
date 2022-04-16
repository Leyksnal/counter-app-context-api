import React from 'react'
import styled from 'styled-components'

export default function CounterControlls() {
  return (
    <>
    <Holder>
        <button>+</button>
        <button>*</button>
        <button>/</button>
        <button>-</button>
    </Holder>
    </>
  )
}

const Holder = styled.div`
    width: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    

    button{
        width: 50px;
        height: 30px;
        font-size: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
