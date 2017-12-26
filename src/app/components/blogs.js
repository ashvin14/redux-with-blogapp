 import React from "react";
 import { Render } from "react-dom"


export class SingleBlog extends React.Component{

    render(){
        return(
            <div className="post-preview">
                    <a >
                        <h2 className="post-title">
                        {this.props.Blog.title}
                           
                        </h2>
                        <h3 className="post-subtitle">
                            {this.props.Blog.subtitle}
                            
                        </h3>
                        <h3>
                            {this.props.Blog._id}

                           
                        </h3>
                    </a>
                    <p className="post-meta">Posted by {this.props.Blog.author} <a ></a></p>
                </div>
              
            )
    }
}







 