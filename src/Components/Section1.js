import React, { Component } from "react";

class Section1 extends Component {
  render() {
    const mystyle = {
      fontFamily: "Poppins, sans-serif",
    };

    return (
      <div className="grid grid-cols-2 gap-4 -mt-10">
        {/* First Column */}
        <div className="ml-14">
            <div className="grid grid-cols-6 ">
                <div className="w-24 h-0.5 my-4 ml-5 mr-12 bg-[#363636]"></div>
                <div  style={mystyle} className=" font-simple text-2xl mx-8 col-span-5 mb-4 text-gray-800">
                INNOVATION & EVALUATION
                </div>
            </div>
            <div style={mystyle} className="text-6xl font-bold text-gray-800">
                Start your Product
            </div>
            <div style={mystyle} className="text-6xl text-gray-800">
                idea on the right foot
            </div>
        </div>

        {/* Second Column */}
        <div style={mystyle} className="text-3xl ml-14 mr-20 text-gray-800">
          We love unlocking business ambitions. We create magic around client
          goals. Embrace the force that drives results and work with our
          creative digital marketing agency.
        </div>
      </div>
    );
  }
}

export default Section1;
