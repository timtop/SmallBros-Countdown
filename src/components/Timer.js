import React from "react";
// import DateCountdown from "react-date-countdown-timer";
import Countdown from "react-countdown";

const Timer = () => {
  const Completionist = () => <span>It's Mint Day!</span>;

  return (
    <>
      {/* <DateCountdown
        dateTo="March 21, 2022 00:00:00 EST"
        callback={() => alert("It's Mint time")}
      /> */}
      <Countdown date={"2022-03-21T00:00:00"}>
        <Completionist />
      </Countdown>
    </>
  );
};

export default Timer;
