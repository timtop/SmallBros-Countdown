import * as React from "react";
import "../styles/style.scss";
import Timer from "../components/Timer";
import bro from "../images/isolatedBro.png";
import brologo from "../images/smalie.png";

// markup
const IndexPage = () => {
  return (
    <div className="wrapper">
      {/* <p>This is the starter page</p> */}
      <div className="container">
        <div className="counttime">
          <div className="text">
            <img src={brologo} alt="Small Bro" className="smalllogo" />
            <p className="launch">Launch date countdown</p>
          </div>
          <div className="text-bold-w ">
            <Timer />
          </div>
        </div>
        <img src={bro} alt="Small Bro" className="bro" />
      </div>
      <div className="creator">
        By yours Broly JOSHOOOOOOOOOOOOR | SmallBro#1371
      </div>
    </div>
  );
};

export default IndexPage;
