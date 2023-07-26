import React, {Component} from "react";

class Section3 extends Component{
    render(){
        const mystyle = {
            fontFamily: "Poppins, sans-serif",
          };
        return(
            <div style={mystyle}>
                <p className=" text-center mt-[90px] font-[700] text-[50px] text-[#363636] ml-[204px] mr-[204px] ">
                    Our Top Digital Marketing Services in California and New York
                </p>
                <p className=" mt-[50px] text-center text-[28px] text-[#363636]">
                    Planning your Success
                </p>
                <p className="mt-[30px] text-center text-[20px] text-[#363636]">
                    Streamlined best digital marketing services for easy business integration
                </p>
            </div>
        );
    }
}

export default Section3;