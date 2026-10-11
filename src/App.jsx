import { exchangeOptions } from "./data/exchangeData";
import ExchangeCard from "./components/exchange/ExchangeCard";
function App() {
  function handleConvert(option) {
    console.log(option.title);
  }
  return (
    <>
      <h1>Exchange Center</h1>
      <div className="cards-grid">
        {exchangeOptions.map((option) => (
          <ExchangeCard
            key={option.id}
            option={option}
            onConvert={handleConvert}
          />
        ))}
      </div>
    </>
  );
}

export default App;
