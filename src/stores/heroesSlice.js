

export const createHeroesSlice = () => ({
  heroes: localStorage.getItem('heroes') ? JSON.parse(localStorage.getItem('heroes')) : null,
  heroesSearch: localStorage.getItem('heroesSearch') ? JSON.parse(localStorage.getItem('heroesSearch')) : null,
  loading: true,
  error: false
})