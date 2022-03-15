import React from "react";
import DateCountdown from "react-date-countdown-timer";

const Timer = () => {
  return (
    <>
      <DateCountdown
        dateTo="March 21, 2022 00:00:00 GMT+03:00"
        callback={() => alert("It's Mint time")}
      />
    </>
  );
};

export default Timer;
