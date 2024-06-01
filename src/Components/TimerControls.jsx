import { FaPause } from "react-icons/fa";
import { FaArrowRotateLeft, FaPlay } from "react-icons/fa6";

/* eslint-disable react/prop-types */
const TimerControls = ({ startTimer, pauseTimer, resetTimer }) => {
  return (
    <div className="timer-controls">
      <div className="control" onClick={pauseTimer}>
        <FaPause />
      </div>

      <div className="control" onClick={startTimer}>
        <FaPlay />
      </div>
      <div className="control" onClick={resetTimer}>
        <FaArrowRotateLeft />
      </div>
    </div>
  );
};

export default TimerControls;
