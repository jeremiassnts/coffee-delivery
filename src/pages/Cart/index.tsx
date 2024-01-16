import { useContext, useState } from "react";
import { AddressCepInput, AddressContainer, AddressContainerSection, AddressForm, AddressFormContainer, AddressFormInput, AddressHeader, CartContainer, CoffeeCartItem, CoffeeCartItemButtons, CoffeeCartItemDelete, CoffeeCartItemInfo, CoffeeCartItemName, CoffeeCartItemNamePrice, CoffeeCartItemPrice, CoffeeConfirmButton, CoffeeSubtitle, CoffeeTitle, ErrorMessage, PaymentType, PaymentTypes, ProductsBody, ProductsContainer, ProductsHeader } from "./styles";
import { ShoppingCartContext } from "../../contexts/shoppingCartContext";
import { CoffeeData, coffeesBase } from "../Home/coffees";
import { AmountSelector } from "../Home/components/CoffeeOption/styles";
import { ButtonG, ButtonM, TextLBold, TextMRegular, TextS } from "../../styles/global";
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Minus, Money, Plus, Trash } from "phosphor-react";
import { defaultTheme } from "../../styles/themes/default";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

interface CoffeeProductCartData {
    coffee: CoffeeData
    amount: number
}

const addressFormSchema = z.object({
    cep: z.string().min(9, 'Campo CEP não é válido').max(9),
    rua: z.string().min(1, 'Campo Rua é obrigatório'),
    numero: z.coerce.number().min(1, 'Campo Número é obrigatório').nullable(),
    complemento: z.string().optional(),
    bairro: z.string().min(1, 'Campo Bairro é obrigatório'),
    cidade: z.string().min(1, 'Campo Cidade é obrigatório'),
    uf: z.string().min(1, 'Campo UF é obrigatório').max(2, 'Campo deve ter no máximo 2 caracteres')
})
type AddressFormInterface = z.infer<typeof addressFormSchema>

export function Cart() {
    const navigate = useNavigate()
    const [paymentType, setPaymentType] = useState("")
    const { cart, addAmountOfItemsInCart, subtractAmountOfItemsInCart, removeItemFromCart, cleanCart } = useContext(ShoppingCartContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm<AddressFormInterface>({
        resolver: zodResolver(addressFormSchema),
        defaultValues: {
            cep: '',
            bairro: '',
            cidade: '',
            complemento: '',
            numero: null,
            rua: '',
            uf: ''
        }
    })
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

    function handleConfirmOrder() {
        cleanCart()
        navigate('/confirmation', {
            state: {
                bairro: watch('bairro'),
                cidade: watch('cidade'),
                numero: watch('numero'),
                rua: watch('rua'),
                uf: watch('uf'),
                paymentType: paymentType == 'credit' ? 'Cartão de Crédito' : paymentType == 'debit' ? 'Cartão de Débito' : 'Dinheiro'
            }
        })
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
                            {errors.cep && <ErrorMessage>{errors.cep.message}</ErrorMessage>}
                            <AddressCepInput placeholder="CEP" required {...register("cep")} mask={'99999-999'}/>
                            {errors.rua && <ErrorMessage>{errors.rua.message}</ErrorMessage>}
                            <AddressFormInput placeholder="Rua" required {...register("rua")} />
                            {errors.numero && <ErrorMessage>{errors.numero.message}</ErrorMessage>}
                            <div>
                                <AddressFormInput type="number" placeholder="Número" div_width="40%" required {...register("numero")} />
                                <AddressFormInput placeholder="Complemento" div_width="60%" {...register("complemento")} />
                                <TextS>Opcional</TextS>
                            </div>
                            {errors.bairro && <ErrorMessage>{errors.bairro.message}</ErrorMessage>}
                            {errors.cidade && <ErrorMessage>{errors.cidade.message}</ErrorMessage>}
                            {errors.uf && <ErrorMessage>{errors.uf.message}</ErrorMessage>}
                            <div>
                                <AddressFormInput placeholder="Bairro" div_width="40%" required {...register("bairro")} />
                                <AddressFormInput placeholder="Cidade" div_width="50%" required {...register("cidade")} />
                                <AddressFormInput placeholder="UF" div_width="10%" {...register("uf")} />
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
                            <PaymentType onClick={() => handlePaymentSelection("credit")} current_type={paymentType} type="credit">
                                <CreditCard size={16} color={defaultTheme.purple} />
                                <ButtonM>Cartão de crédito</ButtonM>
                            </PaymentType>
                            <PaymentType onClick={() => handlePaymentSelection("debit")} current_type={paymentType} type="debit">
                                <Bank size={16} color={defaultTheme.purple} />
                                <ButtonM>cartão de débito</ButtonM>
                            </PaymentType>
                            <PaymentType onClick={() => handlePaymentSelection("cash")} current_type={paymentType} type="cash">
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
                    <CoffeeConfirmButton onClick={handleSubmit(handleConfirmOrder)} disabled={!paymentType || cart.length == 0}><ButtonG>confirmar pedido</ButtonG></CoffeeConfirmButton>
                </ProductsBody>
            </ProductsContainer>
        </CartContainer >
    )
}