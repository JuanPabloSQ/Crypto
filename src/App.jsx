import React,{useEffect, useState} from "react";
import Card from "./Card.jsx"
import Skeleton from '@mui/material/Skeleton';


function App() {
  const [isLoading, setIsLoading] = useState(true)

  const getData = async () => {
    try{
      await new Promise(resolve => setTimeout(resolve, 4000));
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect (() => {
    getData();
  }, []);
  

  return (
    <div>
      {isLoading ? (
        <Skeleton variant="rectangular" width={150} height={120} />
      ) : (
        <Card
          targetCurrency="CLP"
          baseCurrency="USD"
          exchangeRate={100.057}
        />
      )}
    </div>
  );
}

export default App
