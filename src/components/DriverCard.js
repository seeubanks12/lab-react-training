import React from "react";
import Rating from './Rating';

const DriverCard = (props) => {  

    return(
        <div className='bgBlue'>
            <img src={props.img}/>
            <div className='cardData'>
                <p>{props.name}</p>
            <p><Rating children={props.rating}/></p>
            <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>

    )

}

export default DriverCard