import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import "./AuthPages.css"

import { getUser, useStore } from '../../store'


const initialState = {
  email: '',
  password: ''
}

const LoginPage = () => {

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
      <h2 className="auth-title">Sign In</h2>
        <form 
          className="auth-form"
          onSubmit={handlerSubmit}
        >
          <div className="field">
            <label htmlFor="email">Email</label>
            <input 
              type="text" 
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
            <p>Don't have an account?</p>
            <p><Link to={`/register?redirect=${redirect}`}>Create account</Link></p>
          </div>
        </form>
    </article>
  )
}

export default LoginPage