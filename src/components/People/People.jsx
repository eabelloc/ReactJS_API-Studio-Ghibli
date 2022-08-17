import React, {useState, useEffect} from 'react'
import axios from 'axios';
import PeopleCard from '../PeopleCard/PeopleCard';
import './People.css'

const People = () => {
  const [peopleList, setPeopleList] = useState([]);

  const getFilms = async () => {
    const rawData = await axios.get("https://ghibliapi.herokuapp.com/people");
    setPeopleList(rawData.data)
  }

  useEffect(() => {
    getFilms()
  }, [])
  
  
    return (
    <section className='people_section'>
        <h2>People</h2>
        <div className='people_gallery'>
            {peopleList.length > 0 ? peopleList.map((people) => <PeopleCard peopleInfo={people} key={people.id} />) : (<p>Loading people...</p>)}
        </div>
    </section>
  )
}

export default People