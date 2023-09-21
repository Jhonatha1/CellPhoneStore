import React from 'react'
import styled, { keyframes } from 'styled-components'

const frame = keyframes`
    0% {
        height: 10em;
    }
    50% {
        height: 5em;
    }
    100% {
        height: 10em;
    }
`;

const LoadingContainer = styled.div`
    position: absolute;
    top: 0; /* Alterado para 0 para remover a margem superior */
    left: 0;
    right: 0;
    bottom: 0; /* Alterado para 0 para remover a margem inferior */
    background-color: crimson;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;

    div {
        width: 2em;
        height: auto;
        background-color: white;
        animation: ${frame} 1.5s linear infinite;

        &:nth-child(2) {
            animation-delay: 0.2s;
        }
        &:nth-child(3) {
            animation-delay: 0.4s;
        }
    }

    h1{
        color: white;
        font-size: 2em;
        font: bolder;
        
    }
`;

export const Loading = () => {
    return (
        
        <LoadingContainer>
            
            <div></div>
            <div></div>
            <div></div>
            
        </LoadingContainer>
        
    )
}
