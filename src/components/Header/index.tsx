import logo from "../../assets/logo.png"
import { Container, Content, Logo } from "./styles"

type HeaderProps = {
    onOpenNewTransactionModal: () => void;
}

export function Header ({onOpenNewTransactionModal}: HeaderProps) {

    

    return (
        <Container>
            <Content>
                <Logo>
                    <img src={logo} alt="BMoney"/><span>BMoney</span>
                </Logo>
                <button type="button" onClick={onOpenNewTransactionModal}>Nova transação</button>
                
            </Content>
        </Container>
    )
}