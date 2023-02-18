import React from 'react'

import "./LandingPage.css";


const LandingPage = () => {
  return (
    <section className="landing container">
      <h2>Best Marvel & DC characters</h2>

        <div className="landing-body">
          <p className='landing-body-title'>This is a list of the greatest heroes and villains from comics, in my opinion, the most important ever created.</p>
          <p className='landing-body-subtitle'>
            Marvel and DC Comics have been creating superheroes and gods for decades. DC Comics is one of the largest and oldest American comic book companies in existence, with Marvel on its heels (having begun in 1939 as Timely Publications). According to 2017 statistics, Marvel and DC Comics shared approximately 70 percent of the American comic book market combined. That’s a ton of superheroes, villains, and gods. Of all the most powerful beings and entities within the Marvel and DC universes, who reigns supreme, and who will fall short?
          </p>
        </div>
        <img src="./heroes/banner.jpg" alt="All heroes" />
    </section>
  )
}

export default LandingPage