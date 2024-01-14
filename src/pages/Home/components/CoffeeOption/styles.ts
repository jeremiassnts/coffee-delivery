import styled from "styled-components";
import { TextS, TitleS } from "../../../../styles/global";

export const CoffeeOptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 20vw;
    background-color: ${e => e.theme["base-card"]};
    padding: 5rem 1.75rem 1rem 1.75rem;
    border-top-right-radius: 40px;
    border-bottom-left-radius: 40px;
    position: relative;

    img {
        width: 100px;
        position: absolute;
        top: -30px;
        left: 0;
        right: 0;
        margin: auto;
    }
`

export const CoffeeTags = styled.div`
    display: flex;
    gap: 0.5rem;
    padding: 1rem 0;
    justify-content: center;
    align-items: center;

    span {
        color: ${e => e.theme["yellow-dark"]};
        background-color:${e => e.theme["yellow-light"]};
        border-radius: 10px;
        padding: 0.2rem 0.5rem;
        text-transform: uppercase;
    }
`

export const CoffeeName = styled(TitleS)`
    color: ${e => e.theme["base-subtitle"]};
    text-align: center;
    margin-bottom: 0.75rem;
`

export const CoffeeDescription = styled(TextS)`
    color: ${e => e.theme["base-label"]};
    text-align: center;
    height: 70px;
`

export const CoffeeFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
`

export const CoffeePrice = styled.div`
    display: flex;
    gap: 0.3rem;
    justify-content: center;
    align-items: baseline;
`

export const CoffeeAmountContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
`

export const AmountSelector = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    gap: 0.5rem;
    background-color: ${e => e.theme["base-button"]};
    padding: 0.4rem 0.5rem;
    border-radius: 4px;

    button {
        border: none;
        background-color: transparent;
        color: ${e => e.theme.purple};
        transition: all 0.1s;
        cursor: pointer;

        &:hover {
            color: ${e => e.theme["purple-dark"]};
        }
    }
`

export const CoffeeShoppingCart = styled.div`
    color: ${e => e.theme.white};
    background-color: ${e => e.theme["purple-dark"]};
    border-radius: 4px;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background-color: ${e => e.theme["purple"]};
    }
`