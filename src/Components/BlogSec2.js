import React, {Component} from "react";


class BlogSec2 extends Component{
    render(){
        const mystyle = {
            fontFamily: "Poppins, sans-serif",
            color: "#363636",
          };

        return(
            <div style={mystyle}>
                <h1 className=" text-center mt-10 mb-10 text-[50px] font-[700]">Our Blog posts</h1>
            </div>
        );
    }
};

export default BlogSec2;