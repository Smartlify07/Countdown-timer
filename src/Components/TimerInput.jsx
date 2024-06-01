/* eslint-disable react/prop-types */
const TimerInput = ({ value, handleChange }) => {
  return (
    <input
      className="timer-input"
      type="number"
      onChange={(e) => handleChange(e)}
      value={value}
    />
  );
};

export default TimerInput;
