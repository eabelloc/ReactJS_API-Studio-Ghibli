import React from 'react'
import './PeopleCard.css'

const PeopleCard = ({peopleInfo}) => {
    return (
        <ul className='people-card'>
            <li><strong>Name:</strong> {peopleInfo.name}</li>
            <li><strong>Gender:</strong> {peopleInfo.gender}</li>
            <li><strong>Age:</strong> {peopleInfo.age}</li>
            <li><strong>Eye color:</strong> {peopleInfo.eye_color}</li>
            <li><strong>Hair color:</strong> {peopleInfo.hair_color}</li>
            
        </ul>
      )
}

export default PeopleCard