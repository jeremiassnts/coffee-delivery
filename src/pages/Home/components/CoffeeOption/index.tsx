import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { Tag, TextMRegular, TextS, TitleM } from "../../../../styles/global";
import { CoffeeData } from "../../coffees";
import { AmountSelector, CoffeeAmountContainer, CoffeeDescription, CoffeeFooter, CoffeeName, CoffeeOptionContainer, CoffeePrice, CoffeeShoppingCart, CoffeeTags } from "./styles";
import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../../../contexts/shoppingCartContext";

export function CoffeeOption({ id, image, name, description, price, tags }: CoffeeData) {
    const [amount, setAmount] = useState(1)
    const { addItemsToCart } = useContext(ShoppingCartContext)

    function handleMinusAmount() {
        setAmount(state => state <= 1 ? state : state - 1)
    }

    function handlePlusAmount() {
        setAmount(state => state + 1)
    }

    function handleAddItemToCart() {
        addItemsToCart(id, amount)
    }

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
                    <TitleM>{price.toFixed(2).replace('.', ',')}</TitleM>
                </CoffeePrice>
                <CoffeeAmountContainer>
                    <AmountSelector>
                        <button onClick={handleMinusAmount}><Minus /></button>
                        <TextMRegular>{amount}</TextMRegular>
                        <button onClick={handlePlusAmount}><Plus /></button>
                    </AmountSelector>
                    <CoffeeShoppingCart onClick={handleAddItemToCart}>
                        <ShoppingCart weight="fill" size={20} />
                    </CoffeeShoppingCart>
                </CoffeeAmountContainer>
            </CoffeeFooter>
        </CoffeeOptionContainer>
    )
}