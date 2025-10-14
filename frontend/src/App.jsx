import { useEffect, useState } from 'react'
import EstateCard from './components/EstateCard'

function App() {
  const [estates, setEstates] = useState([])
  
  useEffect(()=>{
    fetch("http://127.0.0.1:8000/estate/")
    .then(res => res.json())
    .then(data => setEstates(data))
  },[])
  
  return (
    <>
      <h1>Mesevilág Ingatlan Zrt.</h1>
      { estates.length === 0 && <h1>Loading...</h1> }
      {/* { estates.length === 0 ? <h1>Loading...</h1> : <h1>Betöltöttem!</h1> } */}
      { estates.map(estate => <EstateCard {...estate} />) }
    </>
  )
}

export default App
