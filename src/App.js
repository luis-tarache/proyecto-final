import './App.scss'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import Search from './components/ui/Search'
import CharacterGrid from './components/characters/CharacterGrid'
import Bgvideo from './components/ui/Bgvideo'


const App = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [items, setItems] = useState([])
    const [query, setQuery] = useState('')      
    const [data, setData] = useState(false)

    useEffect(() => {

      const fetchItems = async () => {
        try{
        setIsLoading(true)
        const result = await axios(
          `https://www.breakingbadapi.com/api/characters?name=${query}`
        )

        
        setItems(result.data)
        setIsLoading(false)
        if (query){setData(true)}
        }catch(err){
          console.log('ERROR TYPE', err)
      }
        
      }

      fetchItems()

    }, [query])

    const queryFunction = q => {
      setQuery(q)
    }

  return (
    <div className="container">
      <Bgvideo/>
      <Header/>
      <Search getQuery={queryFunction}/>
      <CharacterGrid isLoading={isLoading} items={items} data={data}/>
    </div>
  );
}

export default App;
