
import React from "react";
import { render } from "react-dom";
import { SingleBlog } from "./SingleBlog"

export class AllBlogsView extends React.Component{
	constructor(props){
		super()
		props.getAllBlogs();

	}
	render(){
		const { Blogs } = this.props;

		return(
			<div className="row">
           			 <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            

               			{Blogs.map((blog)=>(<div key = {blog._id}><SingleBlog Blog = {blog}/></div>))}
                	
              
             
		                <ul className="pager">
		                    
		                    <li className="next">
		                        <a>Add a new blog </a>
		                    </li>
		                </ul>
		            </div>
		</div>
			)

	}
}