
import React from "react";
import { render } from "react-dom";
import { blogs } from "./blogs"

export class AllBlogs extends React.Component{
	componentWillMount(){
		
	}
	render(){

		return(
			<div className="row">
           			 <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            

               
                
              
             
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