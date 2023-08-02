import React, { Component } from "react";


class WebCards extends Component {

    render() {
        const cardData = [
            { id: 'c1', bgColor: '#F48029', title: 'Custom Web Design', imageUrl:  require('../image/Webs/c1.svg').default, },
            { id: 'c2', bgColor: '#F48029', title: 'Responsive Web Development', imageUrl: require('../image/Webs/c2.svg').default, },
            { id: 'c3', bgColor: '#F48029', title: 'Conversion Optimization', imageUrl: require('../image/Webs/c3.svg').default, },
            { id: 'c4', bgColor: '#F48029', title: 'Search Engine Optimization', imageUrl: require('../image/Webs/c4.svg').default, },
        ];

        const cardData2 = [
            { id: 'c5', bgColor: '#F48029', title: 'Web Hosting & Maintaining', imageUrl: require('../image/Webs/c5.svg').default, },
            { id: 'c6', bgColor: '#F48029', title: 'Training', imageUrl: require('../image/Webs/c6.svg').default, },
            { id: 'c7', bgColor: '#F48029', title: 'E-Commerce', imageUrl: require('../image/Webs/c7.svg').default, },
            { id: 'c8', bgColor: '#F48029', title: 'Landing Pages', imageUrl: require('../image/Webs/c8.svg').default, },
        ];

      return (
            <div>
                 {/* 3rd Section 4 Coloumns */}
                <div className="flex justify-evenly grid-cols-4 text-center ml-64 mr-64 h-60 mt-28 mb-8 ">
                    {cardData.map((card) => (
                    <div key={card.id} className={`w-56 bg-${card.bgColor} bg-[#F48029] rounded-lg`}>
                        <img className=" ml-20 mt-16" src={card.imageUrl} alt={`Image ${card.title}`} />
                        <h1 className="text-white text-[20px] mt-6">{card.title}</h1>
                    </div>
                    ))}
                </div>
                <div className="flex justify-evenly grid-cols-4 text-center ml-64 mr-64 h-60 mb-10">
                    {cardData2.map((card) => (
                    <div key={card.id} className={`w-56 bg-${card.bgColor} bg-[#F48029] rounded-lg`}>
                        <img  className=" ml-20 mt-16" src={card.imageUrl} alt={`Image ${card.title}`} />
                        <h1 className="text-[20px] text-white mt-6">{card.title}</h1>
                    </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default WebCards;
