import React, { useState } from 'react'

const App = props => {
  const [state, setState] = useState(props)
  const { name, price } = state
  
  return (
    <>
      <p>{name} {price}</p>
      <button onClick={() => setState({ ...state, price: price + 1 })}>+1</button>
      <button onClick={() => setState({ ...state, price: price - 1 })}>-1</button>
      <button onClick={() => {
        setState(props)
      }}>reset
      </button>
      <input value={name}
             onChange={e => setState({ ...state, name: e.target.value })}/>
    </>
  )
}

App.defaultProps = {
  name: 'ikura',
  price: 1000
}

export default App
