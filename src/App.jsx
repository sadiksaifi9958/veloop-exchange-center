import {
  exchangeOptions,
  userBalance,
  howExchangeWorks,
  recentConversions,
  exchangeRules,
  infoTooltip,
} from "./data/exchangeData";
import ExchangeCard from "./components/exchange/ExchangeCard";
import ExchangeModal from "./components/exchange/ExchangeModal";
import ConversionSuccess from "./components/exchange/ConversionSuccess";
import { useState, useEffect } from "react";
import BalanceOverview from "./components/exchange/BalanceOverview";
import HowExchangeWorks from "./components/exchange/HowExchangeWorks";
import ExchangeHistory from "./components/exchange/ExchangeHistory";
import ExchangeRules from "./components/exchange/ExchangeRules";
import InfoTooltip from "./components/exchange/InfoTooltip";
import styles from "./App.module.css";
function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [balance, setBalance] = useState(userBalance);
  const [isProcessing, setIsProcessing] = useState(false);
  const [completedOption, setCompletedOption] = useState(null);
  const [pageStatus, setPageStatus] = useState("loading");
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

  useEffect(() => {
    if (pageStatus !== "loading") return;

    const timerId = setTimeout(() => {
      setPageStatus("ready");
    }, 1500);

    return () => clearTimeout(timerId);
  }, [pageStatus]);

  if (pageStatus === "loading") {
    return <p>Preparing your reward conversions...</p>;
  }
  if (pageStatus === "error") {
    return (
      <>
        <p>Unable to load exchange options. Please try again.</p>
        <button onClick={() => setPageStatus("loading")} type="button">
          Retry
        </button>
      </>
    );
  }
  if (exchangeOptions.length === 0) {
    return <p>No conversions available right now.</p>;
  }
  return (
    <>
      <h1>Exchange Center</h1>
      <BalanceOverview balance={balance} />
      <section className={styles.conversions}>
        <h2 className={styles.heading}>
          Available Conversions{" "}
          <InfoTooltip
            title={infoTooltip.exchangeRate.title}
            text={infoTooltip.exchangeRate.text}
            label="About Exchange rate"
          />
        </h2>
        <p className={styles.subheading}>
          Choose a conversion that works best for you.
        </p>
        <div className={styles.cardsGrid}>
          {exchangeOptions.map((option) => (
            <ExchangeCard
              key={option.id}
              option={option}
              onConvert={handleConvert}
            />
          ))}
        </div>
      </section>
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
      <div className={styles.sections}>
        <HowExchangeWorks steps={howExchangeWorks} />
        <ExchangeHistory items={recentConversions} />
        <ExchangeRules rules={exchangeRules} />
      </div>
    </>
  );
}

export default App;
