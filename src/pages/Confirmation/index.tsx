import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { TextLRegular, TextS, TitleL } from "../../styles/global";
import { defaultTheme } from "../../styles/themes/default";
import { ConfirmationBody, ConfirmationColoredContainer, ConfirmationContainer, ConfirmationDeliveryInfo, ConfirmationHeader, ConfirmationText } from "./style";
import delivery from '../../assets/Delivery.svg'
import { useLocation } from "react-router-dom";

interface ConfirmationArguments {
    bairro: string
    cidade: string
    numero: number
    rua: string
    uf: string
    complemento: string
    paymentType: string
}
export function Confirmation() {
    const { state } = useLocation()
    const { bairro, cidade, numero, paymentType, rua, uf, complemento } = state as ConfirmationArguments
    return (
        <ConfirmationContainer>
            <ConfirmationDeliveryInfo>
                <ConfirmationHeader>
                    <TitleL>Uhu! Pedido confirmado</TitleL>
                    <TextLRegular>Agora é só aguardar que logo o café chegará até você</TextLRegular>
                </ConfirmationHeader>
                <ConfirmationColoredContainer>
                    <ConfirmationBody>
                        <ConfirmationText background={defaultTheme.purple}>
                            <div><MapPin color={defaultTheme.white} size={13} weight="fill" /></div>
                            <TextS>Entrega em Rua <strong>{rua}, {numero} {complemento}</strong><br />{bairro} - {cidade}, {uf}</TextS>
                        </ConfirmationText>
                        <ConfirmationText background={defaultTheme.yellow}>
                            <div><Timer color={defaultTheme.white} size={13} weight="fill" /></div>
                            <TextS>Previsão de entrega<br /><strong>20 min - 30 min</strong></TextS>
                        </ConfirmationText>
                        <ConfirmationText background={defaultTheme["yellow-dark"]}>
                            <div><CurrencyDollar color={defaultTheme.white} size={13} weight="fill" /></div>
                            <TextS>Pagamento na entrega<br /><strong>{paymentType}</strong></TextS>
                        </ConfirmationText>
                    </ConfirmationBody>
                </ConfirmationColoredContainer>
            </ConfirmationDeliveryInfo>
            <img src={delivery} />
        </ConfirmationContainer>
    )
}