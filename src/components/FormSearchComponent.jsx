import React, { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useStore } from '../store';

import "./FormSearchComponent.css"

const FormSearchComponent = ({ setFilter }) => {

  
  const { user } = useStore( state => state )
  
  let [searchParams, setSearchParams] = useSearchParams();
  let [query, setQuery] = React.useState(
    searchParams.get("query")
  );

  console.log(query)
  
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!user) {
      navigate('/login?redirect=/heroes')
    }
  }, [])
  
  
  const handlerChange = (e) => {
    setQuery(e.target.value)
  }
  
  const handlerSubmit = e => {
    e.preventDefault();

    setSearchParams({ query });

    setFilter(query)
  }
  
  return (
    <form
      onSubmit={handlerSubmit}
    >
      <h3>Search Hero</h3>

      <input 
        type="text" 
        name="search" 
        id="search"
        className='input'
        placeholder="Find a heroes by name"
        onChange={handlerChange}
        value={query === null ? "" : query}
      />
      <button type="submit" className="btn-search">Search</button>
    </form>
  )
}

export default FormSearchComponent
