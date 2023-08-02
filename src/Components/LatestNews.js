import React, { Component } from "react";

import news1 from "../image/digital/wp.webp";
import news2 from "../image/digital/analysis.webp";
import news3 from "../image/digital/digitals.webp";


class LatestNews extends Component {

    render() {

        const mystyle = {
            fontFamily: "Poppins, sans-serif",
            color: "#363636",
        };
        return (
            <div style={mystyle}>
                {/* Latest News */}
                <div className="max-auto">
                    <div className=" relative">
                        <div className=" pt-20 text-center text-[45px] font-[700]">
                            Latest News
                        </div>
                            <div className="p-20 gap-6 grid grid-cols-3 h-[700px]">
                                <div className="mx-auto shadow-lg  overflow-hidden rounded-md bg-white">
                                    <img src={news1} alt=''></img>
                                    <h3 className="p-8 text-[23px] font-[700]">
                                        5 Key Elements of Effective WordPress Web Development Services in
                                        California
                                    </h3>
                                    <p className="px-8 text-[20px]">
                                        In the dynamic digital landscape of California, effective web
                                        development services in California are crucial for businesses to
                                        establish a solid online …
                                    </p>
                                </div>
                                <div className="mx-auto shadow-lg  overflow-hidden rounded  bg-white">
                                    <img src={news2} alt=''></img>
                                    <h3 class="p-8 text-[23px] font-[700]">
                                        Why is Google Analytics Essential to SEO Services in California
                                    </h3>
                                    <p className="px-8 text-[20px]">
                                        In the competitive online landscape, search engine optimization
                                        (SEO) plays a crucial role in driving organic traffic and
                                        improving the visibility of …
                                    </p>
                                </div>
                            <div className="mx-auto shadow-lg  overflow-hidden rounded  bg-white">
                                <img src={news3} alt=''></img>
                                <h3 className="p-8 text-[23px] font-[700]">
                                    How a Digital Marketing Agency in California Can Help Your SEO
                                    Efforts
                                </h3>
                                <p className="px-8 text-[20px]">
                                    In today’s digital world, organizations must have a strong online
                                    presence in order to live and succeed. Search Engine Optimization
                                    (SEO) is …
                                </p>
                            </div>
                        </div>
                    </div>
                        <div className="pb-28 pt-80 bg-[#F48029] text-center -mt-[418px]">
                            <button className="py-3 mt-32 px-6 rounded bg-[#363636] h-14 w-60 p-1 hover:bg-white hover:text-black text-white">
                                Get Free Consultation
                            </button>
                        </div>
                </div>
            </div>
        );
    }
}

export default LatestNews;