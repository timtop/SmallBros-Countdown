import React from "react";
import DateCountdown from "react-date-countdown-timer";

const Timer = () => {
  return (
    <>
      <DateCountdown
        dateTo="March 21, 2022 00:00:00 EST"
        callback={() => alert("It's Mint time")}
      />
    </>
  );
};

export default Timer;
