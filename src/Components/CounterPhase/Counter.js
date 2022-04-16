import React from 'react'
import styled from 'styled-components'
import CounterControlls from '../CounterControlls/CounterControlls';

export default function Counter() {
  return (
    <>
        <Container>
            <Wrapper>
                <h2>2</h2>
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
`;
// const Container = styled.div`

// `;
