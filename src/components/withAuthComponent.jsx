import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useStore } from '../store';

const withAuthComponent = OriginalComponent => {

  const EnhancedComponent = () => {

    let navigate = useNavigate();
    let location = useLocation();

    const { user } = useStore(  state => state );

    useEffect(() => {
      if (!user && location.pathname != "/") {
        return navigate(`/login?redirect=${location.pathname}`)
      }
    }, [user])

    return (
      user && (
        <OriginalComponent />
      )
    )
  }

  return EnhancedComponent;
}

export default withAuthComponent;
