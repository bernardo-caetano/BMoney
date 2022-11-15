import styled from 'styled-components'
import { GlobalStyle } from './styles/global'
import {Header} from './components/Header'
import { Dashboard } from './components/Dashboard'
import Modal from 'react-modal'
import { useState } from 'react'
import { NewTransactionModal } from './components/NewTransactionModal'
import { TransactionsProvider } from './hooks/useTransactions'

Modal.setAppElement('#root')


export function App() {

  const [isNewTransactionModalOpen,setIsNewTransactionModalOpen] = useState(false) //recebe o estado do modal, inicialmente fechado 'false'.

    function handleOpenNewTransactionModal() { //quando uma função que é executada a partir de uma ação do usuário, usa-se 'handle' para denomina-la.
        setIsNewTransactionModalOpen(true)
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false)
    }


  return (

    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <GlobalStyle/>
      <NewTransactionModal
        isOpen ={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </TransactionsProvider>
  )
}


