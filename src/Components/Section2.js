import React, {Component} from "react";
import image from '../image/digital/Sec2.webp';

class Section2 extends Component{
    render(){
        const mystyle = {
            fontFamily: "Poppins, sans-serif",
          };
        return(
            <div className="grid grid-cols-2 gap-4 ml-14">
                {/* First Column */}
                <div>
                    <div className="grid grid-cols-6  mt-32">
                        <div className="w-24 h-0.5 my-4 ml-5 mr-12 bg-[#363636]"></div>
                        <div  style={mystyle} className=" font-simple text-2xl mx-8 col-span-5 mb-4 text-[#363636]">
                        VALUE YOUR MONEY AND TIME
                        </div>
                    </div>
                    <div style={mystyle} className="w-24 text-5xl font-bold text-[#363636]">
                        Harnessing Compatibility
                    </div>
                    <div style={mystyle} className=" text-5xl text-[#363636]">
                        for Maximum <br></br> Advantage
                    </div>
                    <img className=" inline-block h-[438.516px] w-[524.5px] mt-12" src={image}/>
                </div>
                {/* Second Column */}  
                <div style={mystyle}>
                    <p className="text-2xl ml-14 mr-28 text-[#363636] mt-56">
                            NaqsTech Digital is the best digital marketing agency in California and New York. We are your trusted partner for all the best digital marketing services.
                        <p className="mt-6">
                            Our complete services, including SEO, PPC, copywriting, and web design, are tailored to your unique business goals. From eCommerce to B2B, we have the expertise to grow your business.
                        </p>
                        <p className="mt-6">
                            Choose NaqsTech Digital and experience the difference a true digital marketing partner can make.
                        </p>
                    </p>
                    <button style={mystyle} className="text-base ml-14 mb-16 mt-8 align-middle bg-[#363636] text-white pl-6 pr-6 pt-3 pb-3 inline rounded-md hover:bg-[#F48029]">Get an Instant Quote</button>
                </div>
            </div>
        );
    }
}

export default Section2;