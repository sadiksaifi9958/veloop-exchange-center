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
  statusConfig,
  rulesImage,
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
import Reveal from "./components/exchange/Reveal";

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
  const [history, setHistory] = useState(recentConversions);

  function handleConvert(option) {
    setSelectedOption(option);
  }

  function handleConfirm(option) {
    setIsProcessing(true);
    setTimeout(() => {
      setSelectedOption(null);
      setIsProcessing(false);
      setCompletedOption(option);
    }, 1500);
  }

  function onContinue() {
    if (!completedOption) return;

    setBalance((prevBalance) => ({
      gems: prevBalance.gems - completedOption.requiredGems,
      ves: prevBalance.ves + completedOption.receiveVEs,
    }));
    setHistory((prevHistory) => [
      {
        id: `history-${Date.now()}`,
        gems: completedOption.requiredGems,
        ves: completedOption.receiveVEs,
        date: "Just now",
        status: "Completed",
        image: completedOption.image,
      },
      ...prevHistory.slice(0, 4),
    ]);
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
        <Reveal delay={0} className={styles.fill}>
          <ExchangeHero balance={balance} />
        </Reveal>
        <Reveal delay={0.15} className={styles.fill}>
          <WhatAreThese items={whatAreThese} />
        </Reveal>
      </div>
      <div className={styles.layout}>
        <div className={styles.main}>
          <Reveal delay={0.3}>
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
                {exchangeOptions.map((option, index) => (
                  <ExchangeCard
                    key={option.id}
                    option={option}
                    onConvert={handleConvert}
                    index={index}
                  />
                ))}
              </div>
            </section>
          </Reveal>
          <Reveal delay={0.45}>
            <RewardBanner content={rewardBanner} />
          </Reveal>
          <Reveal delay={0.6}>
            <HowExchangeWorks steps={howExchangeWorks} />
          </Reveal>
        </div>
        <aside className={styles.side}>
          <Reveal delay={0.3}>
            <ExchangeHistory
              items={history}
              labels={historyLabels}
              statusConfig={statusConfig}
            />
          </Reveal>
          <Reveal delay={0.45}>
            <ExchangeRules rules={exchangeRules} image={rulesImage} />
          </Reveal>
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
