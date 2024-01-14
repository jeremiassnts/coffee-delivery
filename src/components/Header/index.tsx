import { Container, HeaderInfo, Location, HeaderShoppingCart, CartAmount } from "./styles";
import LogoImage from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from "phosphor-react";
import { TextS } from "../../styles/global";
import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/shoppingCartContext";

export function Header() {
    const { cart } = useContext(ShoppingCartContext)
    const cartAmount = cart.reduce((sum, e) => sum + e.amount, 0)
    return <Container>
        <img src={LogoImage} />
        <HeaderInfo>
            <Location>
                <MapPin weight="fill" />
                <TextS>Porto Alegre, RS</TextS>
            </Location>
            <HeaderShoppingCart>
                <ShoppingCart weight="fill" />
                {cart.length > 0 && <CartAmount>
                    <TextS>{cartAmount}</TextS>
                </CartAmount>}
            </HeaderShoppingCart>
        </HeaderInfo>
    </Container>
}