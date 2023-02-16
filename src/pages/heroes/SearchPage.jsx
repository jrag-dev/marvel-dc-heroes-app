import React, { useEffect, useState } from 'react'
import { getHeroesByName, useStore } from '../../store'
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import FormSearchComponent from '../../components/FormSearchComponent';


import "./SearchPage.css";
import { HeroeComponent } from '../../components/HeroeComponent';


const SearchPage = () => {

  const navigate = useNavigate();

  const { user, heroesSearch } = useStore( state => state );

  const [filter, setFilter] = useState("");


  useEffect(() => {
    if (!user) {
      return navigate("/login?redirect=/heroes")
    }
    getHeroesByName(filter)
  }, [filter])

  // if (loading) return <div className="loading">Loading...</div>

  console.log(filter)
  
  return (
    <section className="search-page container">

      <div className="form-container">
        <FormSearchComponent setFilter={setFilter}/>
      </div>

      <article className="search-list">
        <h3>Heroes List</h3>
        <article className="heroes-grid">
          {
            !heroesSearch
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

export default SearchPage