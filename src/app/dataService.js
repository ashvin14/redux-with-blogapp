import axios from "axios"


const dataService = (store) => next => action =>{

	next(action);

	switch(action.type){
		case "GET_ALL_BLOGS":
		axios.get("http://localhost:8000/home").then((response)=>{
			console.log("response is")
			
			return next({
				type:"GET_BLOGS",
				data:response.data
			})
		},(err)=>{
				console.log(err)
			})

		break;
	}

}
export default dataService;