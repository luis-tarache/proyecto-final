import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'


const CharacterGrid = ({items, isLoading, data}) => { 

  if (data && items.length===0){return <div className='noResults'><h1>Sin resultados, por favor intente nuevamente!</h1></div>}

  return ( isLoading ? (
    <Spinner/>
  ) : ( 
    <section className='cards'>
        {items.map(item => (
            <CharacterItem key={item.char_id} item={item}></CharacterItem>
        ))}
    </section>
  )
  )
}

export default CharacterGrid