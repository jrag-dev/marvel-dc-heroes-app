import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAllHeroes, useStore } from '../../store';
import { HeroeComponent } from '../../components/HeroeComponent';

import "./HeroesPage.css";
import withAuthComponent from '../../components/withAuthComponent';


const HeroesPage = () => {

  const { heroes } = useStore( state => state )

  useEffect(() => {
    getAllHeroes()
  }, [])
  

  if (!heroes) return <div>Cargando...</div>

  console.log(heroes)

  return (
    <section className="heroes container">
      <h2>All Heroes</h2>

      <article className="heroes-grid">

        {
          heroes.length > 0 
          ? (
            heroes.map( (hero) => (
              <HeroeComponent
                key={hero.id}
                hero={hero}
              />
            ))
          )
          : (
            <div className="empty">
              <h3>Heroes</h3>
            </div>
          )
        }

      </article>
    </section>
  )
}

export default withAuthComponent(HeroesPage)