import React from "react";
// import DateCountdown from "react-date-countdown-timer";
import Countdown from "react-countdown";

const Timer = () => {
  const Completionist = () => <span>It's Mint time!</span>;

  return (
    <>
      {/* <DateCountdown
        dateTo="March 21, 2022 00:00:00 EST"
        callback={() => alert("It's Mint time")}
      /> */}
      <Countdown date={Date.now() + 5000}>
        <Completionist />
      </Countdown>
    </>
  );
};

export default Timer;
