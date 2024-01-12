import styled from "styled-components";

export const Container = styled.header`
    padding: 1rem 10vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100vw;
    height: 8vh;
`

export const HeaderInfo = styled.div`
    display: flex;
    gap: 0.6rem;
`

export const Location = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme["purple-light"]};
    padding: 0.4rem;
    border-radius: 4px;
    gap: 0.2rem;

    svg {
        color: ${props => props.theme["purple"]};
    }
    span {
        color: ${props => props.theme["purple-dark"]};;
    }
`

export const HeaderShoppingCart = styled.div`
    background-color: ${props => props.theme["yellow-light"]};
    color: ${props => props.theme["yellow-dark"]};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.4rem;
    border-radius: 4px;
`