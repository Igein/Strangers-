import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { createMessage } from "../api";


const SendMessage = ({id, token}) => {
  const [message, setMessage] = useState({contents: ''})



 async function newMessage() {
  await createMessage({id,message,token})

 }




  return (
    <form onSubmit={ (event) => {
      event.preventDefault()
      newMessage()
    } }>
      <input
      type='text'
      placeholder="enter message"
      onChange={ (event) => setMessage({content: event.target.value})}

      />
       <button type='submit'>Send Message</button>
    </form>
  )
}

const ViewSinglePost = ({posts, token}) => {

  const [activateMessage, setActivateMessage] = useState(false)
   const { id } = useParams();
   const [currentPost] = posts.filter(post => post._id === id);

   const { title, description, location, price, willDeliver} = currentPost;


    return (
      <div>
      <div>
        <h3>{title}</h3>
        <p>Description: {description}</p>
        <p>Price: {price}</p>
        <p>Location: {location}</p>
        <p>Location: {willDeliver}</p>
        </div>
        <button onClick={() => setActivateMessage(!activateMessage)}>
          Message User
        </button>
        {
          activateMessage && <SendMessage id={id} token={token}/>
        }
        </div>
    )
}


export default ViewSinglePost;