import React, { useEffect, useState } from 'react'
import { getHeroesByName, useStore } from '../../store'
import FormSearchComponent from '../../components/FormSearchComponent';


import "./SearchPage.css";
import { HeroeComponent } from '../../components/HeroeComponent';
import withAuthComponent from '../../components/withAuthComponent';


const SearchPage = () => {

  const { heroesSearch } = useStore( state => state );

  const [filter, setFilter] = useState("");


  useEffect(() => {
    getHeroesByName(filter)
  }, [filter])

  // if (loading) return <div className="loading">Loading...</div>

  return (
    <section className="search-page container">

      <div className="form-container">
        <FormSearchComponent setFilter={setFilter}/>
      </div>

      <article className="search-list">
        <h3>Heroes List</h3>
        <article className="heroes-grid">
          {
            !heroesSearch.length > 0
            ? (
              <div className="empty">Find a hero by name</div>
            ) :  (
              heroesSearch.map( (hero) => (
                <HeroeComponent
                  key={hero.id}
                  hero={hero}
                />
              ))
            )
          }
          </article>
      </article>
    </section>
  )
}

export default withAuthComponent(SearchPage);