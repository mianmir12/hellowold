import React, {Component} from "react";

class InnerCard extends Component {

    render(){
        return(
            <div className="rounded-md shadow-lg w-4/5 h-48 text-center shadow-orange-300">
                <span className="flex items-center justify-center mt-12 pb-2"><img src={this.props.image} alt="icon" /></span>
                <h3>{this.props.heading}</h3>
            </div>
        );
    }
}
export default InnerCard;