import styled, { css } from "styled-components";
import { TextMBold, TextMRegular, TitleXS } from "../../styles/global";
import InputMask from 'react-input-mask'

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

    &:hover:not(:disabled) {
        background-color: ${e => e.theme["yellow-dark"]};       
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`

export const AddressHeader = styled(TitleXS)`
    color: ${e => e.theme["base-subtitle"]}
`

export const AddressFormContainer = styled.div`
    margin-top: 0.75rem;
    border-radius: 4px;
    gap: 1rem;
    display: flex;
    flex-direction: column;

    svg {
        color: ${e => e.theme["yellow-dark"]};
    }

    header {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 0.4rem;

        div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;

            span {
                &:first-of-type {
                    color: ${e => e.theme["base-subtitle"]};
                }
                &:last-of-type {
                    color: ${e => e.theme["base-text"]};
                }
            }
        }
    }
`

export const AddressForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;

    div {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        position: relative;

        span {
            font-style: italic;
            color: ${e => e.theme["base-label"]};
            position: absolute;
            top: 1.3rem;
            right: 1rem;
        }
    }
`

interface AddressFormInputArguments {
    div_width?: string
}

const addressFormInputCss = css<AddressFormInputArguments>`
    background-color: ${e => e.theme["base-input"]};
    border: solid 1px ${e => e.theme["base-input"]};
    padding: 1rem;
    border-radius: 4px;
    color: ${e => e.theme["base-text"]};
    outline: none;
    width: ${e => e.div_width ? e.div_width : "100%"};

    &::placeholder {
        color: ${e => e.theme["base-label"]};
    }

    &:focus {
        border: solid 1px ${e => e.theme["yellow-dark"]};
    }
`

export const AddressFormInput = styled.input<AddressFormInputArguments>`
    ${addressFormInputCss}
`

export const AddressCepInput = styled(InputMask)<AddressFormInputArguments>`
    ${addressFormInputCss}
`

export const PaymentTypes = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
`
interface PaymentTypeArguments {
    type: 'credit' | 'debit' | 'cash'
    current_type: string
}

export const PaymentType = styled.button<PaymentTypeArguments>`
    border: 1px solid ${e => e.type == e.current_type ? e.theme.purple : e.theme["base-button"]};
    background-color: ${e => e.type == e.current_type ? e.theme["purple-light"] : e.theme["base-button"]};
    border-radius: 4px;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    text-transform: uppercase;
    color: ${e => e.theme["base-text"]};
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background-color: ${e => e.theme["base-hover"]};
    }
`

export const AddressContainerSection = styled.div`
    background-color: ${e => e.theme["base-card"]};
    padding: 2rem;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const ErrorMessage = styled(TextMRegular)``