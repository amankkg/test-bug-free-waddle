import React from 'react'

import './app.css'
import {Header} from './header'
import {Form} from './form'

export function App() {
  const onSubmit = (form) => {
    const message = `Login: ${form.login}\nPassword: ${form.password}`

    alert(message)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <h1>Register as new user</h1>
        <Form onSubmit={onSubmit} />
      </main>
    </div>
  )
}
