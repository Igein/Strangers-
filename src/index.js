import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import {
    Navbar,
    Posts,
    Profile,
    Home,
    Register,
    Login,
    CreatePost,
    ViewSinglePost,
    EditPost,
    DeletePost
} from './components';
import {
    getPosts, getUserPosts
} from './api'

const App = () => {
    const [posts, setPosts] = useState([]);
    const [token, setToken] = useState('');
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    function logout () {
        window.localStorage.removeItem('token');
        setToken('');
    }



    async function fetchPosts() {
        const results = await getPosts(token);
        // console.log(results)
        setPosts(results.data.posts);

    }

   async function getUser() {
        const storedToken = window.localStorage.getItem('token');
        if (!token) {
            setToken(storedToken);
            return;
        }
      const results = await getUserPosts(token)
      if (results.success){
        setUser(results.data)
      } else {
        console.log(results.error.message)
    }
      
    }

    useEffect(() => {
        fetchPosts()
    }, [token])

    useEffect(() => {
        getUser()
    }, [token])

    return (
        // <h1>Stranger's Things</h1>
        <div>
            <Navbar logout={ logout } token = {token}/>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/profile" element={<Profile user={user}/>} />
                <Route path="/posts" 
                element={<Posts 
                    posts={posts} 
                   token={token}
                   />} />
                <Route path="/posts/:id" element={<ViewSinglePost posts={posts} token={token}/>} />
                <Route path="/register" element={<Register setToken={setToken} token={token}
                    navigate={navigate} />} />
                <Route path="/login" element={<Login setToken={setToken}
                    navigate={navigate} />} />
                <Route 
                exact path="/create-post"
                 element={<CreatePost 
                 token={token}
                 fetchPosts={ fetchPosts } 
                 navigate={ navigate }
                 />} />
                 <Route 
                exact path='/posts/edit-post/:id'
                 element={<EditPost 
                 token={token}
                 posts={ posts }
                 navigate={ navigate }
                 />} />
                    <Route 
                exact path='/posts/delete-post/:id'
                 element={<DeletePost 
                 token={token}
                 posts={ posts }
                 navigate={ navigate }
                 />} />
            </Routes>

        </div>
    )

}

const container = document.querySelector('#container')
const root = ReactDOM.createRoot(container)
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

