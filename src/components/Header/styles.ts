import styled from "styled-components"; //importa "styled-components"

export const Container = styled.header ` //define container
    background: var(--blue);    //usa cariável definida no css global

`

export const Content = styled.div `
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button { //encadeiamento de componentes. Nesse caso será aplicado esse estilo somente para o button dentro de content dentro do arquivo header.
        font-size: 1rem;
        color: #fff;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;
        
        transition: filter 0.2s;

        &:hover { //aplica para o elemento em questão um hover, que no caso é diminuir o brilho do elemento.
            filter: brightness(0.9);
        }
    }

    
`

export const Logo = styled.div `
    display: flex;
    align-items: center;
    width: 11rem;
    justify-content: space-between;

    img {
        width: 2.5rem;
        height: 2.5rem;
    }

    span{
        font-size: 2rem;
        color: #fff;
        font-weight: bold;
        }

`



