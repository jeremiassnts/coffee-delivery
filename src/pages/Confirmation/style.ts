import styled from "styled-components";

export const ConfirmationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
    padding: 15vh 10vw 0 10vw;
    height: 100%;
`

export const ConfirmationDeliveryInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const ConfirmationHeader = styled.header`
    display: flex;
    flex-direction: column;

    span {
        &:first-of-type {
            color: ${e => e.theme["yellow-dark"]};;
        }

        &:last-of-type {
            color: ${e => e.theme["base-subtitle"]};
        }
    }
`

export const ConfirmationColoredContainer = styled.div`
    background: linear-gradient(to right, ${e => e.theme.yellow}, ${e => e.theme.purple});
    padding: 1px;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;
    margin-top: 1rem;
`

export const ConfirmationBody = styled.div`
    background-color: ${e => e.theme.background};
    padding: 1.75rem;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

interface ConfirmationTextArguments {
    background: string;
}

export const ConfirmationText = styled.div<ConfirmationTextArguments>`
    display: flex;
    gap: 0.75rem;
    justify-content: flex-start;
    align-items: center;

    div {
        background-color: ${e => e.background};
        border-radius: 50%;
        width: 1.75rem;
        aspect-ratio: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    span, strong {
        color: ${e => e.theme["base-text"]};
    }
`