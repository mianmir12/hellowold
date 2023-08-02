import React from "react";
import img1 from "../image/Webs/wowflow.webp";
import img2 from "../image/Webs/Bentley.webp";
import img3 from "../image/Webs/gymnation.webp";
import img4 from "../image/Webs/illusive.webp";

function OurClients() {
  return (
    <div className="flex bg-[#F48029] mx-auto p-12">
      <div className="grid grid-cols-5 py-12 ml-16">
        <div className="col-span-2 mx-6 py-20">
          <div className="py-20">
            <div className="grid grid-cols-3">
              <img src={img1} alt="" className="overflow-hidden my-5 ml-7" />
              <div className="w-0.5 h-full bg-white ml-12" />
              <img src={img2} alt="" className="overflow-hidde -ml-16 mt-4" />
            </div>
            <div className="w-[90%] h-0.5 bg-white" />
            <div className="grid grid-cols-3">
              <img src={img3} alt="" className="overflow-hidden my-5 ml-7" />
              <div className="w-0.5 h-full bg-white ml-12" />
              <img src={img4} alt="" className="overflow-hidden my-5 -ml-16" />
            </div>
          </div>
        </div>
        <div className="col-span-3 ml-6">
          <div className="grid grid-cols-6">
            <div className="w-70% h-0.5 bg-white my-4 ml-5" />
            <div className="text-white font-simple text-2xl mx-8 col-span-5">
              Our Partners
            </div>
          </div>
          <div className="pt-5 ml-5 text-white text-6xl font-bold">
            Enduring Partnerships,
          </div>
            <div className="font-extralight text-6xl text-white ml-5 pt-6">
                Building a legacy
                <div className="font-extralight text-6xl text-white pt-4">
                together
                </div>
            </div>
            <div className="ml-5 text-white text-3xl py-12">
                Fortunate to collaborate with an extensive array of customers, Our
                professional digital marketing company has helped businesses across
                industries thrive online.
            </div>
            <button className="mt-8 bg-black text-white ml-6 w-[250px] text-[18px] rounded-md h-14 align-middle hover:bg-white hover:text-black">
                Get Free Consultation
            </button>
        </div>
      </div>
    </div>
  );
}

export default OurClients;
