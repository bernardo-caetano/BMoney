import inImg from '../../assets/in.png'
import outImg from '../../assets/out.png'
import totalImg from '../../assets/dollar.png'
import { Container } from "./styles"

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={inImg} alt="Entradas" />
                </header>
                <strong>R$ 1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outImg} alt="Saídas" />
                </header>
                <strong>R$ -500,00</strong>
            </div>
            <div className='highlight-background'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>R$ 500,00</strong>
            </div>
        </Container>
    )
}