import { useContext, useState } from "react";
import { AddressContainer, AddressContainerSection, AddressForm, AddressFormContainer, AddressFormInput, AddressHeader, CartContainer, CoffeeCartItem, CoffeeCartItemButtons, CoffeeCartItemDelete, CoffeeCartItemInfo, CoffeeCartItemName, CoffeeCartItemNamePrice, CoffeeCartItemPrice, CoffeeConfirmButton, CoffeeSubtitle, CoffeeTitle, PaymentContainer, PaymentType, PaymentTypes, ProductsBody, ProductsContainer, ProductsHeader } from "./styles";
import { ShoppingCartContext } from "../../contexts/shoppingCartContext";
import { CoffeeData, coffeesBase } from "../Home/coffees";
import { AmountSelector } from "../Home/components/CoffeeOption/styles";
import { ButtonG, ButtonM, TextLBold, TextMRegular, TextS, TextXS } from "../../styles/global";
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Minus, Money, Plus, Trash } from "phosphor-react";
import { defaultTheme } from "../../styles/themes/default";

interface CoffeeProductCartData {
    coffee: CoffeeData
    amount: number
}

export function Cart() {
    const [paymentType, setPaymentType] = useState("")
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

    function handlePaymentSelection(paymentType: string) {
        setPaymentType(paymentType)
    }

    return (
        <CartContainer>
            <AddressContainer>
                <AddressHeader>Complete seu pedido</AddressHeader>
                <AddressFormContainer>
                    <AddressContainerSection>
                        <header>
                            <MapPinLine size={18} />
                            <div>
                                <TextMRegular>Endereço de Entrega</TextMRegular>
                                <TextS>Informe o endereço onde deseja receber seu pedido</TextS>
                            </div>
                        </header>
                        <AddressForm>
                            <AddressFormInput name="cep" placeholder="CEP" />
                            <AddressFormInput name="rua" placeholder="Rua" />
                            <div>
                                <AddressFormInput name="numero" placeholder="Número" divWidth="40%" />
                                <AddressFormInput name="complemento" placeholder="Complemento" divWidth="60%" />
                                <TextS>Opcional</TextS>
                            </div>
                            <div>
                                <AddressFormInput name="bairro" placeholder="Bairro" divWidth="40%" />
                                <AddressFormInput name="cidade" placeholder="Cidade" divWidth="50%" />
                                <AddressFormInput name="uf" placeholder="UF" divWidth="10%" />
                            </div>
                        </AddressForm>
                    </AddressContainerSection>
                    <AddressContainerSection>
                        {/* <PaymentContainer> */}
                        <header>
                            <CurrencyDollar color={defaultTheme.purple} size={18} />
                            <div>
                                <TextMRegular>Pagamento</TextMRegular>
                                <TextS>O pagamento é feito na entrega. Escolha a forma que deseja pagar</TextS>
                            </div>
                        </header>
                        <PaymentTypes>
                            <PaymentType onClick={() => handlePaymentSelection("credit")} currentType={paymentType} type="credit">
                                <CreditCard size={16} color={defaultTheme.purple} />
                                <ButtonM>Cartão de crédito</ButtonM>
                            </PaymentType>
                            <PaymentType onClick={() => handlePaymentSelection("debit")} currentType={paymentType} type="debit">
                                <Bank size={16} color={defaultTheme.purple} />
                                <ButtonM>cartão de débito</ButtonM>
                            </PaymentType>
                            <PaymentType onClick={() => handlePaymentSelection("cash")} currentType={paymentType} type="cash">
                                <Money size={16} color={defaultTheme.purple} />
                                <ButtonM>dinheiro</ButtonM>
                            </PaymentType>
                        </PaymentTypes>
                        {/* </PaymentContainer> */}
                    </AddressContainerSection>
                </AddressFormContainer>
            </AddressContainer>
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