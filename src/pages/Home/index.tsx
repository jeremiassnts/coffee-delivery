import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { Banner, BannerCoffee, BannerInfo, BannerInfoIcon, BannerInfoIconGroup, BannerInfoSubtitle, BannerInfoTitle, BannerPackage, BannerShoppingCart, BannerTimer, HomeContainer } from "./styles";
import CoffeBanner from '../../assets/CoffeeBanner.svg'
import { TextMRegular } from "../../styles/global";

export function Home() {
    return (
        <HomeContainer>
            <Banner>
                <BannerInfo>
                    <BannerInfoTitle>Encontre o café perfeito para qualquer hora do dia</BannerInfoTitle>
                    <BannerInfoSubtitle>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</BannerInfoSubtitle>
                    <BannerInfoIconGroup>
                        <BannerInfoIcon>
                            <BannerShoppingCart><ShoppingCart weight="fill" /></BannerShoppingCart>
                            <TextMRegular>Compra simples e segura</TextMRegular>
                        </BannerInfoIcon>
                        <BannerInfoIcon>
                            <BannerPackage><Package weight="fill" /></BannerPackage>
                            <TextMRegular>Embalagem mantém o café intacto</TextMRegular>
                        </BannerInfoIcon>
                        <BannerInfoIcon>
                            <BannerTimer><Timer weight="fill" /></BannerTimer>
                            <TextMRegular>Entrega rápida e rastreada</TextMRegular>
                        </BannerInfoIcon>
                        <BannerInfoIcon>
                            <BannerCoffee><Coffee weight="fill" /></BannerCoffee>
                            <TextMRegular>O café chega fresquinho até você</TextMRegular>
                        </BannerInfoIcon>
                    </BannerInfoIconGroup>
                </BannerInfo>
                <img src={CoffeBanner} />
            </Banner>
        </HomeContainer>
    )
}