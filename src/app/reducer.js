import { List,Map } from "immutable"


const initialBlogState = List([]);

export default function(state=initialBlogState,action){
	switch(action.type){
		case "GET_BLOGS"://to get all 
		state = action.data;
		return state;
		break;



		default:
		return state;



	}
	 
}
