import styled from "styled-components";

export const Container = styled.div`
    margin-top: 2rem;
    margin-left: 1rem;
    margin-right: 1rem;
    display: flex;
    justify-content: center;

    ul {
        width: 25rem;
        border-radius: 8px;
        margin: 5px;
        border: 2px solid #d7d7d7;
        background-color: #ebecf0;

        h3 {
            text-align: center;
            color: #172b4d;
        }

        li {
            padding: 1rem 2rem;
            color: var(--text-body);
            background-color: #fff;
            border: 0;
            border-radius: 8px;
            margin: 10px;
            list-style: none;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            h4 {
                margin-bottom: 1.2rem;
            }
            button {
                width: 20rem;
                padding: 0 1.5rem;
                height: 2rem;
                background-color: red;
                color: #fff;
                border-radius: 8px;
                border: 0;
                font-size: 1rem;
                margin-top: 1.5rem;
            }
        }
    }
`;
