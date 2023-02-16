import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import "./AuthPages.css"

import { getUser, useStore } from '../../store'


const initialState = {
  username: '',
  email: '',
  password: ''
}

const RegisterPage = () => {

  const { user, error } = useStore( state => state )

  const [dataForm, setDataForm] = useState(initialState)

  let navigate = useNavigate()

  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  useEffect(() => {
    if (user) {
      navigate(redirect)
    }

    if (error) {
      return;
    }
  }, [user, redirect, error])

  const handlerChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value 
    })
  }

  const handlerSubmit = async e => {
    e.preventDefault()

    // pasamos al action
    getUser(dataForm)
    // reseteamos el form
    setDataForm(initialState)
    
    // navigate( redirect || '/')

  }

  return (
    <article className="auth-page">
      <h2 className="auth-title">Sign Up</h2>
        <form 
          className="auth-form"
          onSubmit={handlerSubmit}
        >
          <div className="field">
            <label htmlFor="email">Username</label>
            <input 
              type="text" 
              name="username" 
              id="username"
              className="input"
              onChange={handlerChange}
              value={dataForm.username}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              name="email" 
              id="email"
              className="input"
              onChange={handlerChange}
              value={dataForm.email}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              name="password" 
              className="input"
              id="password"
              onChange={handlerChange}
              value={dataForm.password}
              required
            />
          </div>
          <button className="btn-auth">Sign In</button>
          <div className="auth-link">
            <p>Already have an account?</p>
            <p><Link to={`/login?redirect=${redirect}`}>Login</Link></p>
          </div>
        </form>
    </article>
  )
}

export default RegisterPage