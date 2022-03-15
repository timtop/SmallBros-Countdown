import * as React from "react";
import "../styles/style.scss";
import Timer from "../components/Timer";
import bro from "../images/isolatedBro.png";

// markup
const IndexPage = () => {
  return (
    <div className="wrapper">
      {/* <p>This is the starter page</p> */}
      <div className="container">
        <div className="counttime">
          <div className="text-bold-w ">
            <Timer />
          </div>
        </div>
        <img src={bro} alt="Small Bro" className="bro" />
      </div>
      <div className="creator">
        Yours Broly JOSHOOOOOOOOOOOOR | SmallBro#1371
      </div>
    </div>
  );
};

export default IndexPage;
