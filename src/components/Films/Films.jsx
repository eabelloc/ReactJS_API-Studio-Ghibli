import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FilmCard from '../FilmCard/FilmCard';
import './Films.css'

const Films = () => {
  const [filmsList, setFilmsList] = useState([]);

  const getFilms = async () => {
    const rawData = await axios.get("https://ghibliapi.herokuapp.com/films");
    setFilmsList(rawData.data)
  }

  useEffect(() => {
    getFilms()
  }, [])
  
    return (
    <section className='films_section'>
        <h2>Films</h2>
        <div className='films_gallery'>
            {filmsList.length > 0 ? filmsList.map((film) => <FilmCard filmInfo={film} key={film.id} />) : (<p>Loading films...</p>)}
        </div>
    </section>
  )
}

export default Films