import React, { Component } from "react";
import image from '../image/digital/wp.webp';
import image2 from '../image/digital/analysis.webp';
import image3 from '../image/digital/digitals.webp';

import image4 from '../image/digital/creative.webp';
import image5 from '../image/digital/e-commerce.webp';
import image6 from '../image/digital/digitalmarketing.webp';


class BlogSec2 extends Component {
  render() {
    const mystyle = {
      fontFamily: "Poppins, sans-serif",
      color: "#363636",
    };

    return (
      <div style={mystyle}>
        <h1 className="text-center mt-10 mb-20 text-5xl font-bold">Our Blog posts</h1>

        {/* Three-Column Layout */}
        <div className="flex justify-center ml-36 mr-36">
          {/* First Column */}
          <div className="w-1/3 px-4">
                <div className="group relative">
                <div class="flex items-center space-y-2 flex-col justify-center mr-2">
                    <div class="max-w-[400px] overflow-hidden rounded-md">
                        <div class="max-w-[800px] max-h-[300px] overflow-hidden">
                            <img src={image} class="hover:scale-110 transition duration-300 cursor-pointer object-cover rounded-md"/>
                            <h2 className="text-[20px] font-[700] mt-8 ml-5 mr-6 ">5 Key Elements of Effective WordPress Web Development Services in California</h2>
                        </div>
                    </div>
                </div>
            </div>
                <p className="mt-5 ml-5 mr-4 text-[16px] text-{7A7A7A}">
                    In the dynamic digital landscape of California, effective web development services in California are crucial for businesses to establish a solid online …
                </p>
            </div>

            {/* Second Column */}
            <div className="w-1/3 px-4">
                    <div className="group relative">
                        <div class="flex items-center space-y-2 flex-col justify-center mr-2">
                            <div class="max-w-[400px] overflow-hidden rounded-md">
                                <div class="max-w-[800px] max-h-[300px] overflow-hidden">
                                    <img src={image2} class="hover:scale-110 transition duration-300 cursor-pointer object-cover rounded-md"/>
                                    <h2 className="text-[20px] font-[700] mt-8 ml-5 mr-6 ">Why is Google Analytics Essential to SEO Services in California</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="mt-5 ml-5 mr-4 text-[16px] text-{7A7A7A}">
                    In the competitive online landscape, search engine optimization (SEO) plays a crucial role in driving organic traffic and improving the visibility of …
                    </p>
            </div>

            {/* Third Column */}
            <div className="w-1/3 px-4">
                    <div className="group relative">
                        <div class="flex items-center space-y-2 flex-col justify-center mr-2">
                            <div class="max-w-[400px] overflow-hidden rounded-md">
                                <div class="max-w-[800px] max-h-[300px] overflow-hidden">
                                    <img src={image3} class="hover:scale-110 transition duration-300 cursor-pointer object-cover rounded-md"/>
                                    <h2 className="text-[20px] font-[700] mt-8 ml-5 mr-6 ">How a Digital Marketing Agency in California Can Help Your SEO Efforts</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="mt-5 ml-5 mr-4 text-[16px] text-{7A7A7A}">
                        In today’s digital world, organizations must have a strong online presence in order to live and succeed. Search Engine Optimization (SEO) is …
                    </p>
            </div>
        </div>

        {/*2nd Three-Column Layout */}

        <div className="flex justify-center mt-12 ml-36 mr-36 mb-20">
          {/* First Column */}
          <div className="w-1/3 px-4">
                <div className="group relative">
                <div class="flex items-center space-y-2 flex-col justify-center mr-2">
                    <div class="max-w-[400px] overflow-hidden rounded-md">
                        <div class="max-w-[800px] max-h-[300px] overflow-hidden">
                            <img src={image4} class="hover:scale-110 transition duration-300 cursor-pointer object-cover rounded-md"/>
                            <h2 className="text-[20px] font-[700] mt-8 ml-5 mr-6 ">How to Choose the Perfect Graphic Design Services in California for Your Brand?</h2>
                        </div>
                    </div>
                </div>
            </div>
                <p className="mt-5 ml-5 mr-4 text-[16px] text-{7A7A7A}">
                    Graphic design plays a crucial role in shaping your brand’s visual identity. Whether creating a captivating logo, designing a stunning website, or …
                </p>
            </div>

            {/* Second Column */}
            <div className="w-1/3 px-4">
                    <div className="group relative">
                        <div class="flex items-center space-y-2 flex-col justify-center mr-2">
                            <div class="max-w-[400px] overflow-hidden rounded-md">
                                <div class="max-w-[800px] max-h-[300px] overflow-hidden">
                                    <img src={image5} class="hover:scale-110 transition duration-300 cursor-pointer object-cover rounded-md"/>
                                    <h2 className="text-[20px] font-[700] mt-8 ml-5 mr-6 ">7 Ways Ecommerce Marketing Services in California Can Boost Your Online Sales</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="mt-5 ml-5 mr-4 text-[16px] text-{7A7A7A}">
                        Online sales are getting increasingly prevalent in today’s digital age. The rivalry is becoming more difficult as Ecommerce marketing services in California …
                    </p>
            </div>

            {/* Third Column */}
            <div className="w-1/3 px-4">
                    <div className="group relative">
                        <div class="flex items-center space-y-2 flex-col justify-center mr-2">
                            <div class="max-w-[400px] overflow-hidden rounded-md">
                                <div class="max-w-[800px] max-h-[300px] overflow-hidden">
                                    <img src={image6} class="hover:scale-110 transition duration-300 cursor-pointer object-cover rounded-md"/>
                                    <h2 className="text-[20px] font-[700] mt-8 ml-5 mr-6 ">How Can a Digital Marketing Agency in California Transform Your Business</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="mt-5 ml-5 mr-4 text-[16px] text-{7A7A7A}">
                        In today’s extremely competitive digital market, businesses that want to succeed and stay ahead of the curve must have a strong online …
                    </p>
            </div>
        </div>
      </div>
    );
  }
}

export default BlogSec2;
