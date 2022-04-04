import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100vw;
    padding: 0rem 4rem;
    margin-top: 2rem;

    input {
        width: 100%;
        height: 3rem;
        padding: 0rem 1rem;

        border-radius: 8px;
        border: none;

        font-size: 1rem;

        &:hover {
            border-style: solid;
            border-color: var(--green);
            border-width: 2px;
        }

        &:active {
            border: none;
        }

        &:focus {
            outline: none;

            background-color: var(--green);
            color: white;

            transition: background-color 200ms linear;

            ::placeholder {
                color: white;
            }
        }
    }

`;

// export const ContainerOptions = styled.div`
//     position: relative;
//     background-color: red;

//     width: 100%;
//     height: auto;

//     input {
//         position: absolute;
//         z-index: 2;
//     }
// `;