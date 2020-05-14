import React, {useState} from 'react'

import './index.css'

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
    <form onSubmit={handleSubmit}>
      <label>
        <span>Login</span>
        <input name="login" value={login} onChange={onChange} />
      </label>
      <label>
        <span>Password</span>
        <input
          name="password"
          value={password}
          onChange={onChange}
          type="password"
        />
      </label>
      <label>
        <span>Confirm Password</span>
        <input
          name="confirmPassword"
          value={confirmPassword}
          onChange={onChange}
          type="password"
        />
      </label>
      <button type="button" onClick={reset}>
        reset
      </button>
      <button>submit</button>
    </form>
  )
}
