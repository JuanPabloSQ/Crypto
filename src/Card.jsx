
import React,{useEffect, useState} from "react";
import "./Card.css";



// const [data, setData] = useState ()
// const [isLoading, setIsLoading] = useState(false)

// const getData


const Card = ({ baseCurrency, targetCurrency, exchangeRate, item }) => {
  const formatNumber = (number) => {
    const formattedNumber = new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: targetCurrency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
      roundingMode: "floor",
    }).format(number);
    return formattedNumber;
  };

  const formattedExchangeRate = formatNumber(exchangeRate);

  return (
    <div className="card">
      <h2>{baseCurrency}/{targetCurrency}</h2>
      <div className="tooltip">
        <span className="tooltiptext">{formattedExchangeRate} </span>
        <p>{formattedExchangeRate}   
        </p>
      </div>
    </div>
  );
};

export default Card;





