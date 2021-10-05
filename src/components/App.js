import React, { useReducer, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Event from '../components/Event'
import reducer from '../reducers'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  
  const addEvent = (e) => {
    e.preventDefault()
    dispatch({
      type: 'CREATE_EVENT',
      title,
      body
    })
    
    setTitle('')
    setBody('')
  }
  
  const deteleAllEvents = e => {
    e.preventDefault()
    const result = window.confirm('全てのイベントを本当に削除してもいいですか？')
    if (result) dispatch({ type: 'DELETE_ALL_EVENTS' })
  }
  
  return (
    <>
      <div className={'container-fluid'}>
        <h4>イベント作成フォーム</h4>
        <form action="">
          <div className={'form-group'}>
            <label htmlFor="formEventTitle">タイトル</label>
            <input type="text" className={'form-control'} id={'formEventTitle'} value={title}
                   onChange={e => setTitle(e.target.value)}/>
          < /div>
        </form>
        <form action="">
          <div className={'form-group'}>
            <label htmlFor="formEventBody">ボディー</label>
            <textarea className={'form-control'} id={'formEventBody'} value={body}
                      onChange={e => setBody(e.target.value)}/>
          </div>
          <button className={'btn btn-primary'} onClick={addEvent} disabled={body && title ? false : true}>イベントを作成する
          </button>
          <button className={'btn btn-danger'} onClick={deteleAllEvents}
                  disabled={state.length ? false : true}>全てのイベントを削除する
          </button>
        </form>
        <h4>イベント一覧</h4>
        <table className={'table table-hover'}>
          <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          {state.map((event, index) => (
            <Event key={index} event={event} dispatch={dispatch}/>
          ))}
          </tbody>
        </table>
      </div>
    
    </>
  )
}

export default App
