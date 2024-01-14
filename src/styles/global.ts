import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, input, textarea, button {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.3;
    }

    body {
        background-color: ${props => props.theme.background};
    }
`

const Title = styled.span`
    font-family: 'Baloo 2', sans-serif;
`

const TitleBolder = styled(Title)`
    font-weight: bolder;
`

const TitleBold = styled(Title)`
    font-weight: bold;
`

export const TitleXL = styled(TitleBolder)`
    font-size: 3rem;
`

export const TitleL = styled(TitleBolder)`
    font-size: 2rem;
`
export const TitleM = styled(TitleBolder)`
    font-size: 1.5rem;
`
export const TitleS = styled(TitleBold)`
    font-size: 1.25rem;
`
export const TitleXS = styled(TitleBold)`
    font-size: 1.125rem;
`
const Text = styled.span`
    font-family: 'Roboto', sans-serif;
`
export const TextLRegular = styled(Text)`
    font-size: 1.25rem;
`
export const TextLBold = styled(Text)`
    font-size: 1.25rem;
    font-weight: bold;
`
export const TextMRegular = styled(Text)`
    font-size: 1rem;
`
export const TextMBold = styled(Text)`
    font-size: 1rem;
    font-weight: bold;
`
export const TextS = styled(Text)`
    font-size: 0.875rem;
`
export const TextXS = styled(Text)`
    font-size: 0.75rem;
    font-weight: bold;
`
export const Tag = styled(Text)`
    font-size: 0.625rem;
    font-weight: bold;
`
export const ButtonG = styled(Text)`
    font-size: 0.875rem;
    font-weight: bold;
    line-height: 1.6;
`
export const ButtonM = styled(Text)`
    font-size: 0.75rem;
    line-height: 1.6;
`