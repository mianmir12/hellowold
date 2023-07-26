import React, {Component} from "react";

import image from '../image/digital/5stars.webp';
import image2 from '../image/digital/review1.webp';
import image3 from '../image/digital/review2.webp';


class Reviews extends Component{
    render(){
        const mystyle = {
            fontFamily: "Poppins, sans-serif",
            color: "#363636",
          };

        return(
            <div style={mystyle} className="bg-[#FAFAFA] mt-2 pb-16">
                {/* First Review */}
                <div  className="text-[32px] font-[700] p-14 ml-28 ">
                    Reviews
                </div>
                <div className="bg-white ml-40 mr-60 text-base rounded-md hover:shadow-2xl p-8 -mt-2 ">
                    I had a wonderful experience working with NaqsTech Digital. I was looking for the best digital marketing services in California and New York amazingly, one of my friends recommended NaqsTech Digital to me. He had already taken their services and was quite satisfied with the company. I wanted to make my website fully SEO-friendly, and they did the best job! Super happy with their services.
                    <div className="flex justify-start mt-6">
                        <div className="w-1/20">
                            {/* Content for the left column */}
                            <img className="mt-4" src={image2}/>
                        </div>
                        <div className="w-1/16 mt-5 ml-5   ">
                            {/* Content for the right column */}
                            <h1 className="ml-1">Marina.T</h1>
                           <img className="w-28" src={image}/>   
                        </div>
                    </div> 
                </div>
                {/* Second Review */}
                <div className="bg-[#F48029] ml-40 mr-60 text-base rounded-md hover:shadow-2xl	 p-8 mt-6 text-white ">
                    I highly recommend NaqsTech Digital as I was worried about my website's digital presence to grow my business. Thankfully, their team did an excellent job. I am super happy with the efforts they put into my project. I am going to work with them again.
                    <div className="flex justify-start mt-6">
                        <div className="w-1/20">
                            {/* Content for the left column */}
                            <img className="mt-4" src={image3}/>
                        </div>
                        <div className="w-1/16 mt-5 ml-5   ">
                            {/* Content for the right column */}
                            <h1 className="ml-1 text-white">William.M</h1>
                           <img className="w-28" src={image}/>   
                        </div>
                    </div> 
                </div>
            </div>
        );
    }
}

export default Reviews;