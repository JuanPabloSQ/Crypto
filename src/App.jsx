import Card from "./Card.jsx"

function App() {
  return(
  <div>
    <Card
    targetCurrency="CLP"
    baseCurrency="USD"
    exchangeRate={100000651514654} />  
  </div>  
  )
}

export default App
