import React from "react";

function MenuBar() {
    return (
      <nav className="flex items-center justify-between bg-black p-6">
        <div className="bg-black max-auto px-12 flex max-auto ">
          <div className="px-5">
          </div>
        </div>
        <div className="flex space-x-5 mr-80 ">
          {/* Navigation links */}
          <a
            href="C:\Users\Admin\Desktop\React\naqs-tech\src\App.js"
            className="font-sans text-xl text-white hover:text-[#F48029]"
          >
            HOME
          </a>
          <a
            href="C:\Users\Admin\Desktop\React\naqs-tech\src\App.js"
            className="font-sans text-xl text-white hover:text-[#F48029]"
          >
            ABOUT US
          </a>
          <a
            href="C:\Users\Admin\Desktop\React\naqs-tech\src\App.js"
            className="font-sans text-xl text-white hover:text-[#F48029]"
          >
            SERVICES
          </a>
          <a
            href="C:\Users\Admin\Desktop\React\naqs-tech\src\App.js"
            className="font-sans text-xl text-white hover:text-[#F48029]"
          >
            BLOGS
          </a>
          <a
            href="C:\Users\Admin\Desktop\React\naqs-tech\src\App.js"
            className=" font-sans text-xl text-white hover:text-[#F48029]"
          >
            CONTACT US
          </a>
        </div>
      </nav>
    );
}
export default MenuBar;