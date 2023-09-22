import React, { useEffect, useState } from 'react'
import { createContext } from 'react'


export const RouterContext = createContext();

    const  getpokeApi = async (url)=>{

        const res = await fetch(url);
        const data = await res.json(); console.log(data);
        
    }

export const RoutercontextProvider = ({children}) => {

    const [pokemon,setPokemon] = useState(0)

    useEffect(()=>{
        getpokeApi(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10`)
        .then((data)=>{setPokemon(data)})
    })


  return (
    
        <RouterContext.Provider value={{pokemon,setPokemon}}>
            {children}
        </RouterContext.Provider>


  )
}
export default RoutercontextProvider