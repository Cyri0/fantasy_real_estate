import { useState } from 'react'
import axios from "axios"
import style from './NewEstate.module.css'

const NewEstate = () => {
  const [title, setTitle] = useState()
  const [priceInHUF, setPriceInHUF] = useState()

  const [errors, setErrors] = useState([])

  const saveEstate = (e) => {
    e.preventDefault()
    let newErrors = []
    if(title === undefined || title.length === 0){
      newErrors.push("Hiányzó cím!")
    }
    if(priceInHUF === undefined || priceInHUF < 1000){
      newErrors.push("Túl olcsó ingatlan!")
    }
    setErrors(newErrors)

    if(newErrors.length === 0){
      axios.post("http://localhost:8000/estate/add/", {
          title: title,
          priceInHUF: priceInHUF
      }).then(_ => { 
        window.location.reload() 
      })
    }
  }

  return (
    <div className={style.container}>
        <h2>Új Ingatlan</h2>
        <form onSubmit={saveEstate}>
            <label>Ingatlan neve</label><br/>
            <input 
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            /><br/>

            <label>Ingatlan ára</label><br/>
            <input 
              type="number"
              value={priceInHUF}
              onChange={(e) => setPriceInHUF(Number(e.target.value))}
            /><br/>

            {errors.length > 0 && errors.map(error => <p style={{color: "red"}}>{error}</p>)}

            <button type='submit'>💾Mentés</button><br/>
        </form>
    </div>
  )
}

export default NewEstate