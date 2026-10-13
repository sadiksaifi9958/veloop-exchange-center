import { exchangeOptions, userBalance } from "./data/exchangeData";
import ExchangeCard from "./components/exchange/ExchangeCard";
import ExchangeModal from "./components/exchange/ExchangeModal";
import ConversionSuccess from "./components/exchange/ConversionSuccess";
import { useState } from "react";
function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [balance, setBalance] = useState(userBalance);
  const [isProcessing, setIsProcessing] = useState(false);
  const [completedOption, setCompletedOption] = useState(null);
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
      setCompletedOption(option);
    }, 1500);
  }

  function onContinue() {
    setCompletedOption(null);
  }

  return (
    <>
      <h1>Exchange Center</h1>
      <h4>
        Earned Gems: {balance.gems}, VEs Coin: {balance.ves}
      </h4>
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
      {completedOption && (
        <ConversionSuccess option={completedOption} onContinue={onContinue} />
      )}
    </>
  );
}

export default App;
