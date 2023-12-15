
import "./Card.css";
import Skeleton from '@mui/material/Skeleton';


const Card = ({ baseCurrency, targetCurrency, exchangeRate, item, isLoading }) => {


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
       {isLoading ? (
        <div className="skeleton-card">
        <h2>
        <Skeleton variant="text" 
        sx={{ fontSize: '1rem' }}  
        width={130}
        height={25}
       /></h2>
       <h1><Skeleton variant="text" 
        sx={{ fontSize: '1rem' }}  
        width={100}
        height={25}
       /></h1>
       <p>
       <Skeleton variant="text" 
        sx={{ fontSize: '1rem' }}  
        width={130}
        height={25}
       />
       </p>
       </div>
      ) : (
        <>
      <h2>{baseCurrency}/{targetCurrency}</h2>
      <div className="tooltip">
        <span className="tooltiptext">{formattedExchangeRate} </span>
        <p>{formattedExchangeRate}   
        </p>
      </div>
      </>
      )}
    </div>
  );
};

export default Card;





