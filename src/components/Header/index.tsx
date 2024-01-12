import { Container, HeaderInfo, Location, HeaderShoppingCart } from "./styles";
import LogoImage from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from "phosphor-react";
import { TextS } from "../../styles/global";

export function Header() {
    return <Container>
        <img src={LogoImage} />
        <HeaderInfo>
            <Location>
                <MapPin weight="fill"/>
                <TextS>Porto Alegre, RS</TextS>
            </Location>
            <HeaderShoppingCart>
                <ShoppingCart weight="fill" />
            </HeaderShoppingCart>
        </HeaderInfo>
    </Container>
}