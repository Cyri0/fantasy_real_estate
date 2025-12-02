import { useState } from 'react'
import axios from "axios"

const NewEstate = () => {
  const [title, setTitle] = useState("alma")

  const saveEstate = (e) => {
    e.preventDefault()
    axios.post("http://localhost:8000/estate/add/", {
        title: title,
        priceInHUF: 1000000
    }).then(_ => { window.location.reload() })
  }

  return (
    <div>
        <h2>Új Ingatlan</h2>
        <form onSubmit={saveEstate}>
            <label>Ingatlan neve</label><br/>
            <input 
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            /><br/>

            <label>Ingatlan ára</label><br/>
            <input type="number"/><br/>

            <button type='submit'>💾Mentés</button><br/>
        </form>
    </div>
  )
}

export default NewEstate