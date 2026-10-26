import {
  exchangeOptions,
  userBalance,
  howExchangeWorks,
  recentConversions,
  exchangeRules,
  infoTooltip,
  statusMessages,
  rewardBanner,
  whatAreThese,
  historyLabels,
} from "./data/exchangeData";
import ExchangeCard from "./components/exchange/ExchangeCard";
import ExchangeModal from "./components/exchange/ExchangeModal";
import ConversionSuccess from "./components/exchange/ConversionSuccess";
import { useState, useEffect } from "react";
import HowExchangeWorks from "./components/exchange/HowExchangeWorks";
import ExchangeHistory from "./components/exchange/ExchangeHistory";
import ExchangeRules from "./components/exchange/ExchangeRules";
import InfoTooltip from "./components/exchange/InfoTooltip";
import styles from "./App.module.css";
import ExchangeLoader from "./components/exchange/ExchangeLoader";
import ExchangeStatus from "./components/exchange/ExchangeStatus";
import ExchangeHero from "./components/exchange/ExchangeHero";
import RewardBanner from "./components/exchange/RewardBanner";
import WhatAreThese from "./components/exchange/WhatAreThese";

const VALID_STATES = ["loading", "error", "empty"];

function getForcedState() {
  const state = new URLSearchParams(window.location.search).get("state");
  return VALID_STATES.includes(state) ? state : null;
}

function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [balance, setBalance] = useState(userBalance);
  const [isProcessing, setIsProcessing] = useState(false);
  const [completedOption, setCompletedOption] = useState(null);
  const forcedState = getForcedState();
  const [pageStatus, setPageStatus] = useState(forcedState ?? "loading");
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
    if (pageStatus !== "loading" || forcedState === "loading") return;

    const timerId = setTimeout(() => {
      setPageStatus("ready");
    }, 4000);

    return () => clearTimeout(timerId);
  }, [pageStatus, forcedState]);

  if (pageStatus === "loading") {
    return <ExchangeLoader />;
  }
  if (pageStatus === "error") {
    return (
      <>
        <ExchangeStatus
          variant="error"
          title={statusMessages.error.title}
          message={statusMessages.error.message}
          actionLabel={statusMessages.error.actionLabel}
          onAction={() => setPageStatus("loading")}
        />
      </>
    );
  }
  if (pageStatus === "empty" || exchangeOptions.length === 0) {
    return (
      <ExchangeStatus
        variant="empty"
        title={statusMessages.empty.title}
        message={statusMessages.empty.message}
      />
    );
  }
  return (
    <>
      <div className={styles.top}>
        <ExchangeHero balance={balance} />
        <WhatAreThese items={whatAreThese} />
      </div>
      <div className={styles.layout}>
        <div className={styles.main}>
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
          <RewardBanner content={rewardBanner} />
          <HowExchangeWorks steps={howExchangeWorks} />
        </div>
        <aside className={styles.side}>
          <ExchangeHistory items={recentConversions} labels={historyLabels} />
          <ExchangeRules rules={exchangeRules} />
        </aside>
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
