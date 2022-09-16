import React from "react";



const Profile = ( {user}) => {
    const messages=user.messages;
    const userID = user._id; 
    return (
        <div>
            <div>
         <h1>messages from other users</h1>
        {
            messages && messages.map(message => {
                const fromUserID = message.fromUser._id
                const {username} =message.fromUser;
                const {title} =message.post;
                if (userID !== fromUserID)
                return (
                    <div key={message._id}>
                         <p>Message: {message.content} </p>
                    <p>from User: {username}</p>
                    <p>post: {title}</p>
                    </div>

                )

            })

        }
       </div>
       <div>
         <h1>messages from u</h1>
        {
            messages && messages.map(message => {
                const fromUserID = message.fromUser._id;
                const {title} =message.post;
                if (userID === fromUserID)
                return (
                    <div key={message._id}>
                    <p>Message: {message.content} </p>
                    <p>post: {title}</p>
                    </div>

                )

            })

        }
       </div>
       </div>
    )
    
}


export default Profile