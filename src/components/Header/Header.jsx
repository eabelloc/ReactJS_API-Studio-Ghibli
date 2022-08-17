import React from 'react'
import ghibli from '../../assets/ghibli-logo.png'
import "./Header.css"

const Header = ({setShowFilms, setShowPeople}) => {
  return (
    <header>
        <img src={ghibli} alt="Studio Ghibli Logo" />
        <nav>
            <ul className='header_list'>
              <li onClick={() => setShowFilms(true) & setShowPeople(false)}>Films</li>
              <li onClick={() => setShowPeople(true) & setShowFilms(false)}>People</li>
              <li><a href="https://ghibliapi.herokuapp.com/">Studio Ghibli API</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header