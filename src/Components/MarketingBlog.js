import React, { Component } from "react";
import MenuBar from "./MenuBar";
import banner from "../image/Marketing Blog/Banner.webp";
import LatestNews from "./LatestNews";

class MarketingBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isContentVisible: true, // Set initial state to true to show content by default
    };
  }

  // Function to toggle the visibility of the blog post content
  toggleContentVisibility = () => {
    this.setState((prevState) => ({
      isContentVisible: !prevState.isContentVisible,
    }));
  };

  render() {
    const { isContentVisible } = this.state;

    return (
      <div className="font-poppins text-[#363636]">
        <div className="h-12 bg-[#F48029]" />
        <MenuBar />
        <div className="flex justify-center mt-12">
          <img src={banner} alt="Marketing Banner" className="w-[82%]" />
        </div>
        <h1 className="text-[58px] font-[700] mt-4 ml-[130px] mr-[100px] leading-tight">
          How Can a Digital Marketing Agency in California Transform Your Business
        </h1>
        {/* Admin and time */}
        <div className="flex flex-wrap divide-x-2 divide-black color-black ml-32 mt-5 text-[#545595F] pb-10">
          <a href="#" className="px-4 py-1">
            admin
          </a>
          <a href="#" className="px-4 py-1">
            August 01, 2023
          </a>
        </div>

        <div className="grid grid-cols-2 pb-20">
          <div className="text-center">
           
            {/* Toggle visibility on click */}
            <thead onClick={this.toggleContentVisibility} className="cursor-pointer">
                        <tr>
                            <th className="border-2 rounded-lg border-black">
                                Advantages of WordPress Development
                            </th>
                        </tr>
            </thead>

            {/* Blog post content */}
            {isContentVisible && (
              <div className="content">
                    {/* Right column as table */}
                    <table className="border-2 rounded-lg border-black">
                        <tbody>
                            <tr>
                            <td>
                                WordPress is a widely used platform for website development,
                                providing a large community and extensive resources for support.
                            </td>
                            </tr>
                            <tr>
                            <td>
                                Having a qualified WordPress developer can lead to a website that is
                                highly optimized for performance, ensuring fast loading times and
                                better search engine rankings.
                            </td>
                            </tr>
                            <tr>
                            <td>
                                WordPress offers a wide range of plugins and themes, allowing you to
                                easily extend the functionality and customize the design of your
                                website to meet your specific needs.
                            </td>
                            </tr>
                            <tr>
                            <td>
                                With WordPress, you have full control over your content, enabling
                                easy content management and updates without the need for technical
                                expertise.
                            </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
          </div>

          {/* Right column as table */}
          <table className="border-2 rounded-lg border-black">
            <thead>
              <tr>
                <th className="border-2 rounded-lg border-black">
                  Advantages of WordPress Development
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  WordPress is a widely used platform for website development,
                  providing a large community and extensive resources for support.
                </td>
              </tr>
              <tr>
                <td>
                  Having a qualified WordPress developer can lead to a website that is
                  highly optimized for performance, ensuring fast loading times and
                  better search engine rankings.
                </td>
              </tr>
              <tr>
                <td>
                  WordPress offers a wide range of plugins and themes, allowing you to
                  easily extend the functionality and customize the design of your
                  website to meet your specific needs.
                </td>
              </tr>
              <tr>
                <td>
                  With WordPress, you have full control over your content, enabling
                  easy content management and updates without the need for technical
                  expertise.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <LatestNews />
      </div>
    );
  }
}

export default MarketingBlog;
