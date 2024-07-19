import React from 'react'
import './style/categorieBtn.css'

const categorieButton = ({name}) => {
  return (
    <div className='categorie-btn-container'>
        <button className="categorie-button">{name}</button>
    </div>
  )
}

export default categorieButton