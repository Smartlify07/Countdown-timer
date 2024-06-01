/* eslint-disable react/prop-types */

const TimerDisplay = ({ minutes, seconds }) => {
  const formatTimeValues = (value) => {
    return String(value).padStart(2, "0");
  };
  return (
    <div className="timer-display">
      <h1>
        {formatTimeValues(minutes)}:{formatTimeValues(seconds)}
      </h1>
    </div>
  );
};

export default TimerDisplay;
