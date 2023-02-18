import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getHeroesById, useStore } from '../../store';
import { HeroeComponent } from '../../components/HeroeComponent';
import withAuthComponent from '../../components/withAuthComponent';

import "./HeroPage.css";

const HeroPage = () => {

  const { id } = useParams()

  const { hero } = useStore( state => state )

  useEffect(() => {
    getHeroesById(id)
  }, [id])
  
  if (!hero) return <div>Cargando...</div>

  return (
    <div className='hero-page container'>
      <h2>Hero Details</h2>
      <div className="heroes-card" key={hero.id}>
        <p className="heroes-card__description">
          {hero.description}
        </p>
        <div className="heroes-card__img">
          <img src={`../heroes/${hero.id}.jpg`} alt={`${hero.superhero}`}/>
        </div>
        <div className="heroes-card__body">
          <p className="body-title">{hero.superhero}</p>
          <p className="body-alter_ego">{hero.alter_ego}</p>
          <p className="body-appearance">{hero.first_appearance}</p>
          <p>{hero.publisher}</p>
        </div>
      </div>
    </div>
  )
}

export default withAuthComponent(HeroPage)