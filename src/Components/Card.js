import React, {Component} from "react";
import InnerCard from './InnerCard';

import image2 from '../image/icon2.webp';
import image3 from '../image/icon3.webp';
import image4 from '../image/icon4.webp';
import image5 from '../image/icon5.webp';

class Card extends Component {
    render(){
        const datials = [
            {
                image: image5,
                heading: 'SEO'
            },
            {
                image: image2,
                heading: 'Web Development'
            },
            {
                image: image3,
                heading: 'Graphic Design'
            },
            {
                image: image4,
                heading: 'E-Commerce Services'
            },
        ];

        return(
            <div className=" space-x-5 flex justify-evenly align-middle grid-cols-4 pt-50 p-48  ">
                {datials.map(el=> <InnerCard image={el.image} heading={el.heading} />)}
            </div>
        );
    }
}
export default Card;