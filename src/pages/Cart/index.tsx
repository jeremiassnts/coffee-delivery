import { useContext } from "react";
import { AddressContainer, CartContainer, CoffeeCartItem, CoffeeCartItemButtons, CoffeeCartItemDelete, CoffeeCartItemInfo, CoffeeCartItemName, CoffeeCartItemNamePrice, CoffeeCartItemPrice, CoffeeConfirmButton, CoffeeSubtitle, CoffeeTitle, ProductsBody, ProductsContainer, ProductsHeader } from "./styles";
import { ShoppingCartContext } from "../../contexts/shoppingCartContext";
import { CoffeeData, coffeesBase } from "../Home/coffees";
import { AmountSelector } from "../Home/components/CoffeeOption/styles";
import { ButtonG, ButtonM, TextLBold, TextMRegular, TextS } from "../../styles/global";
import { Minus, Plus, Trash } from "phosphor-react";
import { defaultTheme } from "../../styles/themes/default";

interface CoffeeProductCartData {
    coffee: CoffeeData
    amount: number
}

export function Cart() {
    const { cart, addAmountOfItemsInCart, subtractAmountOfItemsInCart, removeItemFromCart } = useContext(ShoppingCartContext)
    const coffees = cart.reduce((arr: CoffeeProductCartData[], e) => {
        let index = arr.findIndex(a => a.coffee.id == e.itemId)
        if (index < 0) {
            arr.push({
                coffee: coffeesBase.find(c => c.id == e.itemId),
                amount: e.amount
            })
            return arr
        } else {
            arr[index].amount += e.amount
            return arr
        }
    }, [])
    const itemTotal = coffees.reduce((sum, e) => sum + e.amount * e.coffee.price, 0)
    const deliveryFee = 3.5

    function handleMinusAmount(itemId: number) {
        subtractAmountOfItemsInCart(itemId)
    }

    function handlePlusAmount(itemId: number) {
        addAmountOfItemsInCart(itemId)
    }

    function handleItemRemoving(itemId: number) {
        removeItemFromCart(itemId)
    }

    return (
        <CartContainer>
            <AddressContainer></AddressContainer>
            <ProductsContainer>
                <ProductsHeader>Cafés selecionados</ProductsHeader>
                <ProductsBody>
                    {coffees.map(({ coffee, amount }: CoffeeProductCartData) => (
                        <CoffeeCartItem key={coffee.id}>
                            <img src={coffee.image} />
                            <CoffeeCartItemInfo>
                                <CoffeeCartItemNamePrice>
                                    <CoffeeCartItemName>{coffee.name}</CoffeeCartItemName>
                                    <CoffeeCartItemPrice>R$ {(coffee.price * amount).toFixed(2).replace('.', ',')}</CoffeeCartItemPrice>
                                </CoffeeCartItemNamePrice>
                                <CoffeeCartItemButtons>
                                    <AmountSelector>
                                        <button onClick={() => handleMinusAmount(coffee.id)}><Minus /></button>
                                        <TextMRegular>{amount}</TextMRegular>
                                        <button onClick={() => handlePlusAmount(coffee.id)}><Plus /></button>
                                    </AmountSelector>
                                    <CoffeeCartItemDelete onClick={() => handleItemRemoving(coffee.id)}>
                                        <Trash color={defaultTheme.purple} />
                                        <ButtonM>remover</ButtonM>
                                    </CoffeeCartItemDelete>
                                </CoffeeCartItemButtons>
                            </CoffeeCartItemInfo>
                        </CoffeeCartItem>))}
                    <CoffeeSubtitle>
                        <TextS>Total de itens</TextS>
                        <TextMRegular>R$ {itemTotal.toFixed(2).replace('.', ',')}</TextMRegular>
                    </CoffeeSubtitle>
                    <CoffeeSubtitle>
                        <TextS>Entrega</TextS>
                        <TextMRegular>R$ {deliveryFee.toFixed(2).replace('.', ',')}</TextMRegular>
                    </CoffeeSubtitle>
                    <CoffeeTitle>
                        <TextLBold>Total</TextLBold>
                        <TextLBold>R$ {((itemTotal + deliveryFee).toFixed(2).replace('.', ','))}</TextLBold>
                    </CoffeeTitle>
                    <CoffeeConfirmButton><ButtonG>confirmar pedido</ButtonG></CoffeeConfirmButton>
                </ProductsBody>
            </ProductsContainer>
        </CartContainer >
    )
}