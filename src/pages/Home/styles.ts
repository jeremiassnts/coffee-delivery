import styled from "styled-components";
import { TextLRegular, TitleL, TitleXL } from "../../styles/global";

export const HomeContainer = styled.div`
    margin-top: 8vh;
    padding: 5rem 10vw;
`

export const Banner = styled.div`
    display: flex;
    gap: 4rem;
    justify-content: center;
`

export const BannerInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;


`

export const BannerInfoTitle = styled(TitleXL)`
    color: ${props => props.theme["base-title"]};
`

export const BannerInfoSubtitle = styled(TextLRegular)`
    color: ${props => props.theme["base-subtitle"]};
`

export const BannerInfoIconGroup = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.85rem;
    padding-top: 3rem;
`

export const BannerInfoIcon = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;

    span {
        color: ${props => props.theme["base-text"]}
    }
`

export const BannerIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.white};
    border-radius: 50%;
    padding: 0.35rem;
`

export const BannerShoppingCart = styled(BannerIcon)`
    background-color: ${props => props.theme["yellow-dark"]};
`

export const BannerPackage = styled(BannerIcon)`
    background-color: ${props => props.theme["base-text"]};
`

export const BannerTimer = styled(BannerIcon)`
    background-color: ${props => props.theme["yellow"]};
`

export const BannerCoffee = styled(BannerIcon)`
    background-color: ${props => props.theme["purple"]};
`

export const CoffeesContainer = styled.div`
    padding-top: 3rem;
`

export const CoffeeTitle = styled(TitleL)`
    color: ${props => props.theme["base-subtitle"]};
`

export const CoffeOptionsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3.5rem;
    padding-top: 3rem;
`