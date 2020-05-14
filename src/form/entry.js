import React from 'react'
import styled from 'styled-components'

export const Entry = ({label, name, value, onChange, type, error}) => {
  return (
    <Root error={error}>
      <span>{label}</span>
      <input name={name} value={value} onChange={onChange} type={type} />
    </Root>
  )
}

const Root = styled.label`
  display: flex;
  justify-content: stretch;
  border-bottom: ${(props) => (props.error ? '1px solid red' : 'none')};

  > * {
    font-size: large;
    padding: 5px;
    margin: 0 5px;
  }

  > span {
    color: ${(props) => (props.error ? 'red' : 'inherit')};
    width: 40%;
    text-align: end;
  }

  > input {
    width: 200px;
    border: ${(props) => (props.error ? '1px solid red' : '1px solid grey')};
  }
`
