import React, { useState, useContext } from 'react'
import { CREATE_EVENT, DELETE_ALL_EVENTS } from './actions'
import AppContext from '../contexts/AppContext'

export const EventForm = () => {
  const { state, dispatch } = useContext(AppContext)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  
  const addEvent = (e) => {
    e.preventDefault()
    dispatch({
      type: CREATE_EVENT,
      title,
      body
    })
    
    setTitle('')
    setBody('')
  }
  
  const deteleAllEvents = e => {
    e.preventDefault()
    const result = window.confirm('全てのイベントを本当に削除してもいいですか？')
    if (result) dispatch({ type: DELETE_ALL_EVENTS })
  }
  return (
    <>
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
        <button className={'btn btn-primary'} onClick={addEvent} disabled={!(body && title)}>イベントを作成する
        </button>
        <button className={'btn btn-danger'} onClick={deteleAllEvents}
                disabled={!state.events.length}>全てのイベントを削除する
        </button>
      </form>
    
    </>
  )
}
