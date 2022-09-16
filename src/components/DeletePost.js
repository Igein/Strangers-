import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { deletePost } from "../api";



const DeletePost = ({posts, token, navigate}) => {

    const { id } = useParams();
    const [currentPost] = posts.filter(post => post._id === id);
 

    async function removePost() {
        await deletePost(token, id)
    }
    
    return (
        <form onSubmit={ (event) => {
            event.preventDefault;
            removePost();
        }}>
            <input
            type='text'
            placeholder='this post will be deleted'
            />

            <button type="submit">Delete Post</button>
        </form>
    )
}


export default DeletePost