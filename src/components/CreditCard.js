import React from 'react';
// import './CreditCard.css'
import visaLogo from '../assets/images/visa.png';
import masterCardLogo from '../assets/images/Mastercard-Logo.png';

const CreditCard = (props) => {
  const creditCardStyle = {
    backgroundColor: `${props.bgColor}`,
    color: `${props.color}`,
  };

  const cardLogo = props.type === 'Visa' ? visaLogo : masterCardLogo

  return (
    <article className="CreditCard" style={creditCardStyle}>
      <div className="logo"><img src={cardLogo} alt="logo"></img></div>
      <div className="secretnumber">
        <h3>···· ···· ···· ···· {props.number.slice(8, 12)}</h3>
      </div>
      <div className="info">
        <p>
          Expires {props.expirationMonth}/{props.expirationYear} {props.bank}
        </p>
        <p>{props.owner}</p>
      </div>
    </article>
   
  );
};



export default CreditCard;
