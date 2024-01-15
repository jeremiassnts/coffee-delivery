import styled from "styled-components";
import { TextMBold, TextMRegular, TitleXS } from "../../styles/global";

export const CartContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;
    margin-top: 8vh;
    padding: 3rem 10vw;
`

export const ProductsContainer = styled.div`
    width: 40%;
`
export const ProductsHeader = styled(TitleXS)`
    color:${e => e.theme["base-subtitle"]}
`

export const ProductsBody = styled.div`
    background-color: ${e => e.theme["base-card"]};
    margin-top: 0.75rem;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;
    padding: 1rem 2rem 2rem 2rem;
`

export const CoffeeCartItem = styled.div`
    display: flex;
    gap: 1.5rem;
    align-items: center;
    border-bottom: solid 1px ${e => e.theme["base-button"]};
    padding: 1rem 0;

    img {
        width: 70px;
    }
`

export const CoffeeCartItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
`

export const CoffeeCartItemNamePrice = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const CoffeeCartItemName = styled(TextMRegular)`
    color: ${e => e.theme["base-subtitle"]}
`

export const CoffeeCartItemPrice = styled(TextMBold)`
    color: ${e => e.theme["base-text"]}
`

export const AddressContainer = styled.div`
    width: 60%;
`

export const CoffeeCartItemButtons = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;

    div {
        padding: 0.3rem;
    }
`

export const CoffeeCartItemDelete = styled.button`
    text-transform: uppercase;
    color: ${e => e.theme["base-text"]};
    background-color: ${e => e.theme["base-button"]};
    border-radius: 4px;
    border: none;
    padding: 0.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.3rem;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background-color: ${e => e.theme["base-hover"]};
    }
`

export const CoffeeSubtitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 0.5rem;
    color: ${e => e.theme["base-text"]};
`

export const CoffeeTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
`

export const CoffeeConfirmButton = styled.button`
    background-color: ${e => e.theme.yellow};
    color: ${e => e.theme.white};
    padding: 0.75rem;
    text-transform: uppercase;
    border: none;
    border-radius: 4px;
    width: 100%;
    margin-top: 1rem;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background-color: ${e => e.theme["yellow-dark"]};       
    }
`