import Card from "./Card.jsx"

function App() {
  return(
  <div>
    <Card
    targetCurrency="CLP"
    baseCurrency="USD"
    exchangeRate={100} />  
  </div>  
  )
}

export default App
