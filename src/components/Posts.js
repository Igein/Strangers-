import React, { Fragment, useState } from "react";
import { Link, } from "react-router-dom";



// const [posts, setPosts] = useState([]);
// const [searchTerm, setSearchTerm] = useState('');

const Posts = ({ posts}) => {


    return (
        <div id="posts">
            {
                posts.map((post) => {
                    const { description, location, price, title, _id, isAuthor } = post;
                    return (
                        <div id="singlePost">
                            <h3>{title}</h3>
                            <p>Description: {description}</p>
                            <p>Price: {price}</p>
                            <p>Location: {location}</p>
                            <div id='editButtons'>
                            {
                                isAuthor ? (
                                    // use isauthor here for view/edit
                                    <Fragment>
                                        <button>
                                        <Link to={`/posts/${_id}`}>View</Link>
                                        </button>
                                        <button>
                                        <Link to={`/posts/edit-post/${_id}`}>Edit</Link>
                                        </button>
                                        <button>
                                        <Link to={`/posts/delete-post/${_id}`}>Delete</Link>
                                        </button>
                                    </Fragment>

                                ) : (
                                    <button>
                                    <Link to={`/posts/${_id}`}>View</Link>
                                    </button>
                                )
                            }
                            </div>
                        </div>
                    )
                }

                )
            }
        </div>
    )

}


export default Posts