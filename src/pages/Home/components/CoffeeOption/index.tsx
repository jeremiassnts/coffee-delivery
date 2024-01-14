import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { Tag, TextMRegular, TextS, TitleM } from "../../../../styles/global";
import { CoffeeData } from "../../coffees";
import { AmountSelector, CoffeeAmountContainer, CoffeeDescription, CoffeeFooter, CoffeeName, CoffeeOptionContainer, CoffeePrice, CoffeeShoppingCart, CoffeeTags } from "./styles";

export function CoffeeOption({ image, name, description, price, tags }: CoffeeData) {
    return (
        <CoffeeOptionContainer>
            <img src={image} />
            <CoffeeTags>
                {tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
            </CoffeeTags>
            <CoffeeName>{name}</CoffeeName>
            <CoffeeDescription>{description}</CoffeeDescription>
            <CoffeeFooter>
                <CoffeePrice>
                    <TextS>R$</TextS>
                    <TitleM>{price.toString().replace('.', ',')}</TitleM>
                </CoffeePrice>
                <CoffeeAmountContainer>
                    <AmountSelector>
                        <button><Minus /></button>
                        <TextMRegular>1</TextMRegular>
                        <button><Plus /></button>
                    </AmountSelector>
                    <CoffeeShoppingCart>
                        <ShoppingCart weight="fill" size={20}/>
                    </CoffeeShoppingCart>
                </CoffeeAmountContainer>
            </CoffeeFooter>
        </CoffeeOptionContainer>
    )
}