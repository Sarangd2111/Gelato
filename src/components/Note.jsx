import React from 'react'
import './stylesheets/note.css'
import TnC from '../resources/info.png'

const Note = ({noteDetails}) => {
  return (
    <div className='Note'>
      <span>{noteDetails}</span>
      <img src={TnC} alt='i'></img>
    </div>
  )
}

export default Note
