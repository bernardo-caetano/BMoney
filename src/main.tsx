import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import { createServer, Model } from 'miragejs'


createServer({

  models:{
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelancer',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createAt: new Date('2022-10-12 09:00:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createAt: new Date('2022-10-12 11:00:00')
        }
      ]
    })
  },

  routes(){
    this.namespace = 'api'; //mostra pro miragejs que todas as chamdas que tem "api" devem passar por ele.

    this.get('/transactions',() => { //sempre que houver a chamada api/transactions será um get e retorna esses dados mockados.
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema,request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction',data)

    })

  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
