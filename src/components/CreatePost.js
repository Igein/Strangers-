import React, {useState} from "react";
import { createPost } from "../api";


const CreatePost = ( {token, fetchPosts, navigate}) => {



    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    const [price, setPrice] = useState('')
    const [willDeliver, setWillDeliver] = useState(false)

    async function addPost() {
        const newPost = {
           title: title,
           description: description,
           location: location,
           price: price,
           willDeliver: willDeliver
        }
        await createPost(token, newPost)
        fetchPosts();
        navigate(`/posts`)
    }






    return (
        <form id="createform" onSubmit={ (event) => {
            event.preventDefault;
            addPost();
        }}>
            <input
            type='text'
            placeholder="enter title here"
            onChange={(event) => setTitle(event.target.value)}
            />
            <input
            type='text'
            placeholder='describe product'
            onChange={(event) => setDescription(event.target.value)}
            />
            <input
            type='text'
            placeholder='location'
            onChange={(event) => setLocation(event.target.value)}
            />
            <input
            type='text'
            placeholder='price'
            onChange={(event) => setPrice(event.target.value)}
            />
            <p>Can Deliver
            <input
            type='checkbox'
            checked={willDeliver}
            onChange={(event) => setWillDeliver(event.target.checked)}
            />
            </p>
            <button type="submit">Create Post</button>
        </form>
    )
}


export default CreatePost