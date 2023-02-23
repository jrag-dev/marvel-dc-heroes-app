import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";



const withCounter = OriginalComponent => {

  const EnhancedComponent = () => {

  let navigate = useNavigate();

    const [count, setCount] = useState(0);

    const [user, setUser] = useState(false);

    const incrementCount = () => {
      setCount( prevCount => prevCount + 1 )
    }

    useEffect(() => {
      if (!user) {
        return navigate("/login")
      }
    }, [user])

    return (

      user
      ? (
      <OriginalComponent
        incrementCount={incrementCount}
        count={count}
      />
      ) : (
        <div>Nada</div>
      )
    )
  }

  return EnhancedComponent;
}


export default withCounter;
