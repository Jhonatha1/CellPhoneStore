import styled from 'styled-components';

export const ProductsArea = styled.div`
    display: flex;
    flex-direction: row;
    gap: 50px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    margin-top: 0px;
    min-height: 100vh;
    background: linear-gradient(to right, #0000, #539980);
    margin-top: -149px;

    div{
        margin-top: 100px;
        height: 320px;
        width: 250px;
        border: 1px solid black;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        background: linear-gradient(to right, black, white);
        margin: black 20px;
        

        button{
            font-size:25px;
            background-color: transparent;
            border: none;
            color: red;
        }
    }
`;