import inImg from '../../assets/in.png'
import outImg from '../../assets/out.png'
import totalImg from '../../assets/dollar.png'
import { Container } from "./styles"
import { useTransactions } from '../../hooks/useTransactions'

export function Summary() {

    const {transactions} = useTransactions()


    const summary = transactions.reduce((acumulator,transaction) =>{
        if (transaction.type === 'deposit'){
            acumulator.deposits += transaction.amount
            acumulator.total += transaction.amount
        }else{
            acumulator.withdraws += transaction.amount
            acumulator.total -= transaction.amount
        }
        return acumulator
    },{
        deposits: 0,
        withdraws: 0,
        total: 0,
    })

    return (
        <Container> 
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={inImg} alt="Entradas" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(summary.deposits)}</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outImg} alt="Saídas" />
                </header>
                <strong>- {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(summary.withdraws)}</strong>
            </div>
            <div className='highlight-background'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(summary.total)}</strong>
            </div>
        </Container>
    )
}