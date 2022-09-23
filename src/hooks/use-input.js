import { useState } from "react";

const useInput = (validateInputValue) => {
  const [enteredValue, setEnteredValue] = useState(``);
  const [InputIsTouched, setInputIsTouched] = useState(false);

  const inputValueIsValid = validateInputValue(enteredValue);
  const inputHasError = !inputValueIsValid && InputIsTouched;

  const inputValueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setInputIsTouched(true);
  };

  const reset = () => {
    setInputIsTouched(false);
    setEnteredValue(``);
  };

  return {
    value: enteredValue,
    inputIsValid: inputValueIsValid,
    error: inputHasError,
    inputHandler: inputValueChangeHandler,
    inputBlur: inputBlurHandler,
    reset,
  };
};

export default useInput;
