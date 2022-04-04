import styled from 'styled-components';

export const Container = styled.div `
    width: 100%;
    margin-top: 1rem;
    padding: 0rem 4rem;

    table {
        width: 100%;
        border-spacing: 0 0.5rem;
        th {
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: center;
            line-height: 1.5rem;
            font-family: Arial, Helvetica, sans-serif;
        }
        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem;
            text-align: center;
            font-family: Arial, Helvetica, sans-serif;
            &:first-child {
                color: var(--text-title);
            }
            &.productName {
                color: var(--green);
                text-align: left;
            }
        }
    }
`;

export const ErrorContainer = styled.div `
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;

    h1 {
        background-color: var(--red);
        padding: 2rem;
        border-radius: 16px;
        color: var(--shape);
    }
`;