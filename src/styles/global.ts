import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{ //cria variáveis
    --background: #f0f2f5;
    --red: #e52e4d;
    --blue: #5429cc;
    --green: #33cc95;

    --blue-light: #6933ff;
    
    --text-title: #363f5f;
    --text-body: #969cb3;

    --shape: #ffffff;
  }  

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    @media  (max-width: 1080px) {
        font-size: 93.75%; //15px - em % para ter acessibilidade ao usuário que aumentar ou diminuir a font no seu dispositivo.
    }

    @media  (max-width: 720px) {
        font-size: 87.5%; //14px
  }
}

  body {
    background: var(--background); 
    -webkit-font-smoothing: antialiased; //font mais nítidas
  }

  body, input, textarea, button { //define para os campos de entrada de dados a mesma fonte padrão, que normalmente tem fontes próprias.
    font-family: 'Poppins', sans-serif; //nesse caso usei a Poppins, mas poderia ser qualquer outra do google.
    font-weight: 400; //diz que o weight padrão é 400, no html o padrão é 500
  }

  h1,h2,h3,h4,h5,h6,strong { //define para todas as tags que quando for negrito usa o 600
    font-weight: 600;
  }

  button{
    cursor:pointer;
  }

  [disabled] { //define para butões desabilitados um opacidade e um cursor de "block"
    opacity: 0.6;
    cursor:not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .react-modal-close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    border: 0;
    background: transparent;
    
    img{
      width: 2rem;
      transition: 0.2s;

      &:hover {
        width: 1.7rem;
      }
    }


    

    

  }

 

`