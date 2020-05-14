import React, {useState} from 'react'

import {Entry} from './entry'
import styles from './index.module.sass'

const defaultState = {
  login: '',
  password: '',
  confirmPassword: '',
}

export function Form({onSubmit}) {
  const [state, setState] = useState(defaultState)

  const {login, password, confirmPassword} = state
  const onChange = (e) => {
    const {name, value} = e.currentTarget

    setState((s) => ({...s, [name]: value}))
  }

  const reset = () => setState(defaultState)
  const handleSubmit = (e) => {
    e.preventDefault()

    onSubmit(state)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.root}>
      <Entry
        label="Login"
        name="login"
        value={login}
        onChange={onChange}
        type="text"
      />
      <Entry
        label="Password"
        name="password"
        value={password}
        onChange={onChange}
        type="password"
      />
      <Entry
        label="Confirm Password"
        name="confirmPassword"
        value={confirmPassword}
        onChange={onChange}
        type="password"
        error={password !== confirmPassword}
      />
      <div className={styles.footer}>
        <button type="button" onClick={reset}>
          reset
        </button>
        <button>submit</button>
      </div>
    </form>
  )
}
