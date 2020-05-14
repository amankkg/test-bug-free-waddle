import React from 'react'

import {Header} from './header'
import {Form} from './form'
import styles from './app.module.css'

export function App() {
  const onSubmit = (form) => {
    const message = `Login: ${form.login}\nPassword: ${form.password}`

    alert(message)
  }

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.main}>
        <h1>Register as new user</h1>
        <Form onSubmit={onSubmit} />
      </main>
      <footer className={styles.footer}>
        <a href="https://redux.js.org" className={styles.link}>
          Learn Redux
        </a>
      </footer>
    </div>
  )
}
