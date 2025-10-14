const EstateCard = (props) => {
    return (
    <div>
        <h2>{props.title}</h2>
        <h3>{props.priceInHUF / 1000000}M Ft</h3>
        <h5>Feladva: { props.created }</h5>
    </div>)
}

export default EstateCard