import React,{useEffect, useState} from "react";
import Card from "./Card.jsx"



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
        <Card
          isLoading= {isLoading}
          targetCurrency="CLP"
          baseCurrency="USD"
          exchangeRate={100.057}
        />
    </div>
  );
}

export default App
