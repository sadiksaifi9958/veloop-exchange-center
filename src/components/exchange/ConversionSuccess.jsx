function ConversionSuccess({ option, onContinue }) {
  return (
    <>
      <h2>Conversion Complete</h2>
      <p>{option.requiredGems} Gems Converted</p>
      <p>{option.receiveVEs} VEs added to your balance.</p>
      <button onClick={onContinue} type="button">
        Continue
      </button>
    </>
  );
}

export default ConversionSuccess;
