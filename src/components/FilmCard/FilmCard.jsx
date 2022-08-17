import React from 'react'
import "./FilmCard.css"

const FilmCard = ({filmInfo}) => {
  return (
    <figure className='film-card'>
        <div>
            <img src={filmInfo.image} alt={filmInfo.title} />
        </div>
        <h3>{filmInfo.title}</h3>
        <h4>Director: {filmInfo.director}</h4>
    </figure>
  )
}

export default FilmCard