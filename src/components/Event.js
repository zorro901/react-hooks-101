import React from 'react'
import { useReducer } from 'react'
import reducer from '../reducers'

const Event = ({ event, dispatch }) => {
  const id = event.id
  const handleClickDeleteButton = () => {
    dispatch({
      type: 'DELETE_EVENT',
      id
    })
  }
  return (
    <tr>
      <td>{event.id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button className={'btn btn-danger'} onClick={handleClickDeleteButton}>削除</button>
      </td>
    </tr>
  )
}

export default Event