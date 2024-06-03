import { useEffect, useRef } from "react";
import { useState } from "react";
import TimerControls from "./Components/TimerControls";
import TimerInput from "./Components/TimerInput";
import TimerDisplay from "./Components/TimerDisplay";

function App() {
  // set a timer - use input to set the number of seconds
  // Start timer - start the countdown. Timer depends on if the countdown has started
  // Pause timer - pause the countdown. Set the started to false
  // Reset timer - reset to the initial time set by the user

  // Timer state

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [timerInput, setTimerInput] = useState("");
  const [isSet, setIsSet] = useState(false);
  const refValue = useRef(59);

  function handleChange(e) {
    setTimerInput(e.target.value);
  }

  function startTimer() {
    setIsStarted(true);
  }

  function pauseTimer() {
    setIsStarted(false);
  }

  function resetTimer() {
    setMinutes(Math.floor(timerInput / 60));
    setSeconds(timerInput % 60);
    setIsStarted(false);
    setIsSet(false);
  }

  function setTimer() {
    setIsSet(true);
    setSeconds(timerInput % 60); // set seconds to the remaining seconds
    setMinutes(Math.floor(timerInput / 60)); // set minutes to Converted seconds to minutes
  }

  useEffect(() => {
    if (isStarted === true) {
      const intervalId = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prevState) => (prevState % 60) - 1);
        }

        if (seconds === 0 && minutes === 0) {
          setIsStarted(false);
          setIsSet(false);
        } else if (seconds === 0) {
          setMinutes((prevState) => prevState - 1);
          setSeconds(refValue.current);
        }
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  });

  return (
    <>
      <TimerDisplay minutes={minutes} seconds={seconds} />

      {!isSet && (
        <div className="wrapper">
          <TimerInput value={timerInput} handleChange={handleChange} />

          <button
            disabled={timerInput === ""}
            onClick={setTimer}
            className="set-timer"
          >
            Set
          </button>
        </div>
      )}

      {isSet && (
        <TimerControls
          startTimer={startTimer}
          resetTimer={resetTimer}
          pauseTimer={pauseTimer}
        />
      )}
    </>
  );
}

export default App;
