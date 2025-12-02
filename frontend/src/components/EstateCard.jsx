import axios from "axios"
import style from './EstateCard.module.css'

const EstateCard = (props) => {
    const deleteEstate = () => {
        axios.delete(`http://127.0.0.1:8000/estate/delete/${props.id}/`)
        .then(_ => { window.location.reload() })
    }

    return (
    <div className={style.container}>
        <h2>{props.title}</h2>
        <h3>{props.priceInHUF / 1000000}M Ft</h3>
        <h5>Feladva: { props.created }</h5>
        <button onClick={deleteEstate}>❌</button>
    </div>)
}

export default EstateCard