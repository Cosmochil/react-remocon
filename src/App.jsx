import React, {useState} from 'react'
import styled from 'styled-components'
import TempControl from './components/TempControl';
import './index.css'


function App() {
    const Container = styled.div`
        display: flex;
        padding: 0 auto;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background: #BFAFB2;
    `;
    return (
        <Container>
            <TempControl />
        </Container>
    )
}

export default App
