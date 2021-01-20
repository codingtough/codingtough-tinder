import React, { useState } from 'react';
import './ChatScreen.css';
import Avatar from '@material-ui/core/Avatar'

function ChatScreen() {
   const [input, setInput] = useState("");
   const [messages, setMessages] = useState([
      {
         name: "Sandra",
         image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Sandra_Bullock_%289192365016%29_%28cropped%29.jpg/260px-Sandra_Bullock_%289192365016%29_%28cropped%29.jpg",
         message: "What's up?"
      },
      {
         name: "Sandra",
         image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Sandra_Bullock_%289192365016%29_%28cropped%29.jpg/260px-Sandra_Bullock_%289192365016%29_%28cropped%29.jpg",
         message: "Hows it going!"
      },
      {
         message: "Hi! How are you Sandra?"
      }
   ]);

   const handleSend = e => {
      e.preventDefault();
      setMessages([...messages, {message: input}]);
      setInput("");
   }
   
   return (
      <div className="chatScreen">
         <p className="chatScreen__timestamp">YOU MATCHED WITH SANDRA ON 25/11/20</p>
         {
            messages.map(message => (
               message.name ? (
                  <div key={message.name} className="chatScreen__message">
                     <Avatar
                        className="chatScreen__image"
                        src={message.image}
                        alt={message.name}
                     />
                     <p className="chatScreen__text">{message.message}</p>
                  </div>
               ) : (
                  <div key={message.message} className="chatScreen__message">
                     <p className="chatScreen__textUser">{message.message}</p>
                  </div>
               )
            ))
         }
         <form className="chatScreen__input" >
            <input 
               value={input}
               onChange={e => setInput(e.target.value)}
               className="chatScreen__inputField"
               type="text"
               placeholder="Type a message..."
            />
            <button 
               onClick={handleSend}
               type="submit" 
               className="chatScreen__inputButton"
            >
               SEND
            </button>
         </form>
      </div>
   )
}

export default ChatScreen;
