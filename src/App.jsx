import Card from "./Card.jsx"

function App() {
  return(
  <div>
    <Card
    targetCurrency="CLP"
    baseCurrency="USD"
    exchangeRate={100.057} />  
  </div>  
  )
}

export default App
