// import React, { useEffect, useState } from 'react';


const baseURL = "https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-PT"

export const getPosts = async (token) => {
  try {
    const response = await fetch(`${baseURL}/posts`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    const results = await response.json();
    return (results);

  } catch (error) {
    console.log("error getting posts")
  }

}

export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${baseURL}/users/register`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        }
      })
    });
    const results = await response.json();
    return results;


  } catch (error) {
    console.log('error registering')
  }


}

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${baseURL}/users/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username,
          password
        }
      })
    });
    const results = await response.json();
    return results;


  } catch (error) {
    console.log('error loggong in')
  }
}


export const getUserPosts = async (token) => {
  try {
    const response = await fetch(`${baseURL}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });
    const results = await response.json();
    return (results);

  } catch (error) {
    console.log("error getting user posts")
  }

}

export const createPost = async (token, {title, description, price, location, willDeliver}) => {
  try {
    const response = await fetch(`${baseURL}/posts`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        post: {
          title,
          description,
          location,
          price,
          willDeliver
        }
      })
    });
    const results = await response.json();
    return (results);

  } catch (error) {
    console.log("error creating posts")
  }

}

export const updatePost = async (token, { title, description, location, price, willDeliver}, id ) => {
  try {
    const response = await fetch(`${baseURL}/posts/${(id)}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        post: {
          title,
          description,
          location,
          price,
          willDeliver
        }
      })
    });
    const results = await response.json();
    return (results);

  } catch (error) {
    console.log("error getting user posts")
  }

}

export const createMessage = async ({id, token, message}) => {
  try {
    const response = await fetch(`${baseURL}/posts/${(id)}/messages`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        message
      })
    });
    const results = await response.json();
    return (results);

  } catch (error) {
    console.log("error getting user posts")
  }

}

export const deletePost = async (token, id) => {
  try {
    const response = await fetch(`${baseURL}/posts/${(id)}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    const results = await response.json();
    return (results);

  } catch (error) {
    console.log("error getting user posts")
  }

}
