import { exchangeOptions, userBalance } from "./data/exchangeData";
import ExchangeCard from "./components/exchange/ExchangeCard";
import ExchangeModal from "./components/exchange/ExchangeModal";
import { useState } from "react";
function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [balance, setBalance] = useState(userBalance);
  const [isProcessing, setIsProcessing] = useState(false);
  function handleConvert(option) {
    setSelectedOption(option);
  }
  function handleConfirm(option) {
    setIsProcessing(true);
    setTimeout(() => {
      setBalance((prevBalance) => ({
        gems: prevBalance.gems - option.requiredGems,
        ves: prevBalance.ves + option.receiveVEs,
      }));
      setSelectedOption(null);
      setIsProcessing(false);
    }, 1500);
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
      {selectedOption && (
        <ExchangeModal
          option={selectedOption}
          balance={balance}
          onClose={() => setSelectedOption(null)}
          onConfirm={handleConfirm}
          isProcessing={isProcessing}
        />
      )}
      <p>
        gems: {balance.gems}, ves: {balance.ves}
      </p>
    </>
  );
}

export default App;
