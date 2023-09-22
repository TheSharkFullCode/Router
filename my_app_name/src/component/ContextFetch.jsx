import React, { useContext } from 'react'
import { RouterContext } from './RoutercontextProvider'

export const ContextFetch = () => {

    const {pokemon,setPokemon}= useContext(RouterContext)
    console.log(pokemon);
    
  return (

    <div>
        <span>{pokemon.name}</span>
    </div>
  )
}
