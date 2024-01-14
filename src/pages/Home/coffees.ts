import ExpressoTradicional from '../../assets/Type=Expresso.svg'
import ExpressoAmericano from '../../assets/Type=Americano.svg'
import ExpressoCremoso from '../../assets/Type=Expresso Cremoso.svg'
import ExpressoGelado from '../../assets/Type=Café Gelado.svg'
import CafecomLeite from '../../assets/Type=Café com Leite.svg'
import Latte from '../../assets/Type=Latte.svg'
import Capuccino from '../../assets/Type=Capuccino.svg'
import Macchiato from '../../assets/Type=Macchiato.svg'
import Mocaccino from '../../assets/Type=Mochaccino.svg'
import ChocolateQuente from '../../assets/Type=Chocolate Quente.svg'
import Cubano from '../../assets/Type=Cubano.svg'
import Havaiano from '../../assets/Type=Havaiano.svg'
import Arabe from '../../assets/Type=Árabe.svg'
import Irlandes from '../../assets/Type=Irlandês.svg'

export interface CoffeeData {
    id: number
    name: string
    tags: string[]
    description: string
    price: number
    image: string
}

export const coffeesBase: CoffeeData[] = [
    {
        "id": 1,
        "name": "Expresso Tradicional",
        "tags": ["tradicional"],
        "description": "O tradicional café feito com água quente e grãos moídos",
        "price": 9.9,
        "image": ExpressoTradicional
    }, {
        "id": 2,
        "name": "Expresso Americano",
        "tags": ["tradicional"],
        "description": "Expresso diluído, menos intenso que o tradicional",
        "price": 9.9,
        "image": ExpressoAmericano
    }, {
        "id": 3,
        "name": "Expresso Cremoso",
        "tags": ["tradicional"],
        "description": "Café expresso tradicional com espuma cremosa",
        "price": 9.9,
        "image": ExpressoCremoso
    }, {
        "id": 4,
        "name": "Expresso Gelado",
        "tags": ["tradicional", "gelado"],
        "description": "Bebida preparada com café expresso e cubos de gelo",
        "price": 9.9,
        "image": ExpressoGelado
    }, {
        "id": 5,
        "name": "Café com Leite",
        "tags": ["tradicional", "com leite"],
        "description": "Meio a meio de expresso tradicional com leite vaporizado",
        "price": 9.9,
        "image": CafecomLeite
    }, {
        "id": 6,
        "name": "Latte",
        "tags": ["tradicional", "com leite"],
        "description": "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        "price": 9.9,
        "image": Latte
    }, {
        "id": 7,
        "name": "Capuccino",
        "tags": ["tradicional", "com leite"],
        "description": "Bebida com canela feita de doses iguais de café, leite e espuma",
        "price": 9.9,
        "image": Capuccino
    }, {
        "id": 8,
        "name": "Macchiato",
        "tags": ["tradicional", "com leite"],
        "description": "Café expresso misturado com um pouco de leite quente e espuma",
        "price": 9.9,
        "image": Macchiato
    }, {
        "id": 9,
        "name": "Mocaccino",
        "tags": ["tradicional", "com leite"],
        "description": "Café expresso com calda de chocolate, pouco leite e espuma",
        "price": 9.9,
        "image": Mocaccino
    }, {
        "id": 10,
        "name": "Chocolate Quente",
        "tags": ["especial", "com leite"],
        "description": "Bebida feita com chocolate dissolvido no leite quente e café",
        "price": 9.9,
        "image": ChocolateQuente
    }, {
        "id": 11,
        "name": "Cubano",
        "tags": ["especial", "alcoólico", "gelado"],
        "description": "Drink gelado de café expresso com rum, creme de leite e hortelã",
        "price": 9.9,
        "image": Cubano
    }, {
        "id": 12,
        "name": "Havaiano",
        "tags": ["especial"],
        "description": "Bebida adocicada preparada com café e leite de coco",
        "price": 9.9,
        "image": Havaiano
    }, {
        "id": 13,
        "name": "Árabe",
        "tags": ["especial"],
        "description": "Bebida preparada com grãos de café árabe e especiarias",
        "price": 9.9,
        "image": Arabe
    }, {
        "id": 14,
        "name": "Irlandês",
        "tags": ["especial", "alcoólico"],
        "description": "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        "price": 9.9,
        "image": Irlandes
    }
]