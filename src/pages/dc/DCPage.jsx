import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getHeroesByPublisher, useStore } from '../../store';
import { HeroeComponent } from '../../components/HeroeComponent';

const DCPage = () => {
  const { user, heroes } = useStore( state => state )

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login?redirect=/heroes')
    }
  getHeroesByPublisher("DC Comics")
  }, [])
  

  if (!heroes) return <div>Cargando...</div>

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

export default DCPage
