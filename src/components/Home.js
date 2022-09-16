import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div>
                   <h1>Welcome To Strangers Things</h1>
                   <button id='createpostbutton'>
                    <Link to={'/create-post'}>Create Post</Link>
                   </button>


        </div>
 
    )
}


export default Home;