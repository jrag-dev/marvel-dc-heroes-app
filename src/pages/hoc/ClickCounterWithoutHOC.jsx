import React, {useState} from "react";


const ClickCounterWithoutHOC = () => {

  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount( prevCount => prevCount + 1 )
  }

  return (
    <button onClick={incrementCount}>
      Clicked {count} times
    </button>
  )
}

export default ClickCounterWithoutHOC;
