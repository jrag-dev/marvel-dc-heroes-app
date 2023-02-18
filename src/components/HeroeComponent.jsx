import React from 'react'
import { Link } from 'react-router-dom'

import "./HeroeComponent.css";


export const HeroeComponent = ({ hero }) => {
  return (
    <div className="heroes-card" key={hero.id}>
      <div className="heroes-card__img">
        <img src={`heroes/${hero.id}.jpg`} alt={`${hero.superhero}`}/>
      </div>
      <div className="heroes-card__body">
        <p className="body-title">{hero.superhero}</p>
        <p className="body-alter_ego">{hero.alter_ego}</p>
        <p className="body-appearance">{hero.first_appearance}</p>
        <p className="body-more"><Link to={`/hero/${hero.id}`}>More...</Link></p>
      </div>
  </div>
  )
}
