function Ship(props){

    return(
        <div className='ShipCard'>
            <h3 className='ShipName'>{props.result.name} </h3>
            <li><span> Manufacturer</span>: {props.result.manufacturer}</li>
            <li><span> Ship Class</span>: {props.result.starship_class}</li> 
            <li><span> Hyperdrive Rating</span>: {props.result.hyperdrive_rating}</li>
            <li><span> Cost</span>: ¤{props.result.cost_in_credits}</li>
        </div>
    )
}
export default Ship