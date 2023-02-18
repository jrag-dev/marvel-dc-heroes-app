import React, { useEffect } from 'react'
import { getHeroesByPublisher, useStore } from '../../store';
import { HeroeComponent } from '../../components/HeroeComponent';
import withAuthComponent from '../../components/withAuthComponent';


const MarvelPage = () => {

  const { heroes } = useStore( state => state )

  useEffect(() => {
    getHeroesByPublisher("Marvel Comics")
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

export default withAuthComponent(MarvelPage)