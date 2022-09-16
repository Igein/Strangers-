import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ logout, token }) => {
    return (
        <header id="navheader">
            <h1>Strangers Things</h1>
            <nav id="nav">
                <h2>
                <Link to='/home'>Home</Link>
                <Link to='/posts'>Posts</Link>
                <Link to='/profile'>Profile</Link>

                {
                    token ? (
                        <Link to='/' onClick={() => logout()}>Logout</Link>
                    ) : (
                        <>
                            <Link to='/register'>Register</Link>
                            <Link to='/login'>Login</Link>

                        </>
                    )
                }
                </h2>
            </nav>
        </header>
    )
}


export default Navbar;