import {AllBlogsView}  from "./components/AllBlogsView"
import { connect } from "react-redux";
import { getAllBlogs } from "./actions"
export const AllBlogs = connect(

    function mapStateToProps(state) {
    	console.log(state)
        return {
            Blogs: state
        }
        
    },
    function mapDispatchToProps(dispatch) {
        return {
            getAllBlogs:()=> dispatch(getAllBlogs()),
        };
    }
)(AllBlogsView);