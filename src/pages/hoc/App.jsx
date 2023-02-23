import React from "react";
import ClickCounter from "./ClickCounter";
import ClickCounterWithoutHOC from "./ClickCounterWithoutHOC";
import HoverCounterWithoutHOC from "./HoverCounterWithoutHOC";


function App() {

  return (
    <div>
      <ClickCounterWithoutHOC/>
      <HoverCounterWithoutHOC/>
      <p>Now, using HOC on Counter Component</p>
      <ClickCounter/>
    </div>
  )
}

export default App;
