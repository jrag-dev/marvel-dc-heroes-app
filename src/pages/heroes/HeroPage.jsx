import React from 'react'

const HeroPage = () => {

  const { id } = useParams()

  console.log( id )

  return (
    <div>HeroPage</div>
  )
}

export default HeroPage