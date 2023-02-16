import { create } from "zustand";
import { createAuthSlice } from "./stores/authSlice";
import { createHeroesSlice } from "./stores/heroesSlice";
import { heroes } from "./data/heroes";



export const useStore = create(
  (...a) => ({
    ...createAuthSlice(...a),
    ...createHeroesSlice(...a)
  })
)

export const getUser = (newuser) => {
  localStorage.setItem('user', JSON.stringify(newuser))
  return useStore.setState( state => ({
    user: newuser,
    loading: false,
    error: false
  }))
}


export const signout = () => {
  localStorage.removeItem('user')
  window.location.href = '/login'
  return useStore.setState( state => ({
    user: null,
    loading: false,
    error: true
  }))
}



export const getAllHeroes = () => {
  const heroesFiltered = heroes.map( (heroe) => heroe );

  localStorage.setItem('heroes', JSON.stringify(heroesFiltered))

  return useStore.setState( state => ({
    cargando: false,
    error: false,
    heroes: heroesFiltered
  }))
}


export const getHeroesById = (id) => {
  const heroesFiltered = heroes.filter( (heroe) => heroe.id === id );
  localStorage.setItem('heroes', JSON.stringify(heroesFiltered))

  return useStore.setState( state => ({
    cargando: false,
    error: false,
    heroes: heroesFiltered
  }))
}

export const getHeroesByPublisher = (publisher) => {
  const heroesFiltered = heroes.filter( (heroe) => heroe.publisher === publisher );
  localStorage.setItem('heroes', JSON.stringify(heroesFiltered))

  return useStore.setState( state => ({
    cargando: false,
    error: false,
    heroes: heroesFiltered
  }))
}

export const getHeroesByName = (name) => {

  if (name === "") return;

  console.log(name)
  const heroesFiltered = heroes.filter( (heroe) => heroe.superhero.toLocaleLowerCase().includes(name.toLocaleLowerCase()));

  console.log(heroesFiltered)
  localStorage.setItem('heroesSearch', JSON.stringify(heroesFiltered))

  return useStore.setState( state => ({
    cargando: false,
    error: false,
    heroesSearch: heroesFiltered
  }))
}