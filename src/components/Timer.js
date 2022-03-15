import React from "react";
// import DateCountdown from "react-date-countdown-timer";
import Countdown from "react-countdown";

const Timer = () => {
  const Completionist = () => <span>It's Mint Day!</span>;

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span>
          {days} days : {hours} hrs : {minutes} mins : {seconds} secs
        </span>
      );
    }
  };

  return (
    <>
      {/* <DateCountdown
        dateTo="March 21, 2022 00:00:00 EST"
        callback={() => alert("It's Mint time")}
      /> */}
      <Countdown date={"2022-03-21T00:00:00"} renderer={renderer} />
    </>
  );
};

export default Timer;
