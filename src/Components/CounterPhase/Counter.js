import React, {useContext} from 'react'
import styled from 'styled-components'
import CounterControlls from '../CounterControlls/CounterControlls';
import { CountState } from '../CounterState/CounterState';

export default function Counter() {
    const {num} = useContext(CountState)
  return (
    <>
        <Container>
            <Wrapper>
                <h2>{num}</h2>
            </Wrapper>
            <CounterControlls/>
        </Container>
    </>
  )
}


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 3px #3069AF;
    width: 150px;
    height: 70px;
    margin-bottom: 30px;
    border-radius: 10px;

    h2{
        font-size: 2rem;
    }
`;