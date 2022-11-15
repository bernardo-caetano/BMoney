import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import { createServer} from 'miragejs'


createServer({
  routes(){
    this.namespace = 'api'; //mostra pro miragejs que todas as chamdas que tem "api" devem passar por ele.

    this.get('/transactions',() => { //sempre que hour a chamada api/transactions será um get e retorna esses dados mokados.
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date()
        }
      ]
    })
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
