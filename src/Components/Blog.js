import React, { Component } from "react";
import image from '../image/digital/bannerimg.webp';
import MenuBar from "./MenuBar";
// its blog 
class Blog extends Component {
  render() {
    const mystyle = {
      fontFamily: "Poppins, sans-serif",
      color: "#363636",
      backgroundColor: "#F48029", // Corrected property name to backgroundColor
    };
    return (
      <div style={mystyle}>
        <div className="h-12"></div>
        <div>
          <MenuBar />
        </div>
        <div className="flex">
          {/* First Column */}
          <div className="w-1/4 h-400px pt-16 ml-32 text-white"> {/* Corrected height value */}
            <h1 className="text-lg">Our Latest News</h1>
            <h1 className="text-4xl font-bold mt-6">Blogs</h1>
            <p className="text-lg mt-6">
              We deliver results-driven digital solutions to businesses of all sizes.
            </p>
            <button className="mt-8 bg-[#363636] p-3 w-52 rounded-md h-12 align-middle hover:bg-white hover:text-black">
              Get Free Consultation
            </button>
          </div>

          {/* Second Column */}
          <div>
            <img className="flex-grow w-3/4 pb-36 pt-16 ml-36" src={image} alt="Banner" />
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
