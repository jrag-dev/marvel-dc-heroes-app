

export const createAuthSlice = () => ({
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
  loading: true,
  error: false
})