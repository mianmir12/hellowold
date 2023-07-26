import React, { Component } from "react";

class Section5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faqs: [
        {
          question: "What are digital marketing services?",
          answer:
            "A digital marketing agency is a company that helps businesses market themselves online in different ways. These services include search engine optimization (SEO), pay-per-click advertising (PPC), social media marketing, and email marketing.",
        },
        {
          question: "What is a digital marketing agency?",
          answer:   
            "A digital marketing agency offers its clients various services that can help them reach more customers, spread the word about their brand, and make greater profits online. It is the smart way to run a business.",
          isOpen: false,
        },
        {
            question: "How do I start a digital marketing business?",
            answer:
              "To start a digital marketing business, you must define your niche first and then develop a business plan. Reach out to the best digital marketing agency NaqsTech Digital and take inspiration from their satisfied customers.",
            isOpen: false,
          },
          {
            question: "Which agency is best for digital marketing?",
            answer:
              "NaqsTech Digital is the best digital marketing agency in New York because they have a professional and expert team with excellent communication skills. NaqsTech Digital has collaborated with many clients and elevated their work to an extraordinary level.",
            isOpen: false,
          },
          {
            question: "How can I get digital marketing services?",
            answer:
              "To get your digital marketing services, contact us for a consultation to discuss your needs and goals. From there, we will develop a plan and proposal and work with you to execute the project to achieve your desired results.",
            isOpen: false,
          },
      ],
    };
  }

  toggleFAQ = (index) => {
    this.setState((prevState) => {
      const updatedFaqs = prevState.faqs.map((faq, i) =>
        i === index ? { ...faq, isOpen: !faq.isOpen } : faq
      );
      return { faqs: updatedFaqs };
    });
  };

  render() {
    const mystyle = {
      fontFamily: "Poppins, sans-serif",
      color: "#363636",
    };

    return (
      <div style={mystyle} className="px-20 py-6">
        <div className="grid grid-cols-2 gap-8">
          {/* FAQ Column */}
          <div>
            <div className="flex items-center pt-5 mr-40">
              <div className="w-20 h-0.5 bg-black my-5"></div>
              <div className="text-3xl font-extrabold pl-5 pt-1">FAQ'S</div>
            </div>
            <div className="py-8">
              {this.state.faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-6 bg-gray-100 py-8 px-3 rounded font-bold cursor-pointer ${
                    faq.isOpen ? "bg-gray-200" : ""
                  }`}
                  onClick={() => this.toggleFAQ(index)}
                >
                  <div className="col-span-5 underline">{faq.question}</div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                      className="pl-4"
                    >
                    <path
                        d="M17 30.9211C9.99697 30.8288 4.34231 25.1741 4.25001 18.1711C4.34231 11.168 9.99697 5.51339 17 5.42108C24.003 5.51339 29.6577 11.168 29.75 18.1711C29.6577 25.1741 24.003 30.8288 17 30.9211ZM17 8.25442C11.5532 8.32613 7.15505 12.7242 7.08334 18.1711C7.15505 23.6179 11.5532 28.016 17 28.0878C22.4469 28.016 26.845 23.6179 26.9167 18.1711C26.845 12.7242 22.4469 8.32613 17 8.25442ZM18.4167 25.2544H15.5833V19.5877H9.91668V16.7544H15.5833V11.0878H18.4167V16.7544H24.0833V19.5877H18.4167V25.2544ZM28.747 9.25742L24.4843 5.00742L26.4803 3L30.7445 7.25L28.747 9.256V9.25742ZM5.25443 9.25742L3.24701 7.25L7.48426 3L9.48884 5.006L5.25443 9.256V9.25742Z"
                        fill="#363636"
                    />
                    </svg>
                  </div>
                  {faq.isOpen && (
                    <div
                      className={`col-span-6 mt-2 px-3 bg-white rounded ${
                        faq.isOpen ? "show-text" : "hide-text"
                      }`}
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* "GET IN TOUCH" Column */}
          <div>
            <div className="flex items-center pt-5">
              <div className="text-3xl font-extrabold pl-5 pr-2">
                GET IN TOUCH
              </div>
              <div className="w-20 h-0.5 bg-black my-5 "></div>
            </div>
            <div>
              <form className="py-1">
                <div className="grid grid-cols-2 pl-5">
                  <div className="flex flex-col pr-4 py-5">
                    <label htmlFor="name" className="hidden">
                      Your Name
                    </label>
                    <input
                      type="name"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                      className="w-60 mt-2 px-3 bg-gray-100 text-black py-4 rounded"
                    />
                  </div>
                  <div className="flex flex-col py-5">
                    <label htmlFor="email" className="hidden">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className="w-60 mt-2 py-4 px-3 bg-gray-100 text-black rounded"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 pl-5 py-5">
                <div class="flex flex-col pr-4">
                  <label for="name" class="hidden">
                    Phone Number
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Phone Number"
                    class="w-60 mt-2 py-4 px-3 bg-gray-100 text-black  rounded"
                  />
                </div>
                <div class="flex flex-col">
                  <label for="name" class="hidden">
                    Select Service
                  </label>
                  <select
                    id="category"
                    className=" w-60 mt-2 py-4 px-3 bg-gray-100 text-black rounded"
                  >
                    <option value="General Inquiry">Select Service</option>
                    <option value="Feedback">SEO</option>
                    <option value="Support">Web Development</option>
                    <option value="Feedback">Graphic Design</option>
                    <option value="Feedback">E-Commerce</option>
                  </select>
                </div>
              </div>

              <div class="flex flex-col py-5 pl-5">
                <label for="text" class="hidden">
                  Your Comment
                </label>
                <input
                  type="text"
                  name="text"
                  id="name"
                  placeholder="Your Comment"
                  class=" w-auto mr-10 mt-2 pt-6 px-6 pb-40 h bg-gray-100 text-black  rounded"
                />
              </div>
              <div className="pt-5 pl-5">
                <button
                  type="submit"
                  className="py-4 px-8 rounded bg-[#F48029] p-1 text-white"
                >
                  Get a Qoute
                </button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Section5;
