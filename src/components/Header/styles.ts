import styled from 'styled-components'

export const Container = styled.header`
    background-color: var(--blue);
    padding: 1rem 1rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        color: #fff;
    }

    button {
        font-size: 1rem;
        color: #fff;
        background-color: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 8px;
        height: 3rem;

        &:hover{
            transition: 0.6s;
            filter: brightness(0.9);//altera a cor do proprio elemento
        }
    }
`
