import React from 'react';
import './Chats.css';
import Chat from '../Chat';

function Chats() {
   return (
      <div className="chats">
         <Chat 
            name="Reese"
            message="Hey! how are you :)"
            timestamp="35 minutes ago"
            profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Reese_Witherspoon_at_TIFF_2014.jpg/260px-Reese_Witherspoon_at_TIFF_2014.jpg"
         />
         <Chat 
            name="Jennifer"
            message="What's up ?"
            timestamp="55 minutes ago"
            profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Jennifer_Lawrence_in_2016.jpg/220px-Jennifer_Lawrence_in_2016.jpg"
         />
         <Chat 
            name="Sandra"
            message="Ola!"
            timestamp="3 days ago"
            profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Sandra_Bullock_%289192365016%29_%28cropped%29.jpg/260px-Sandra_Bullock_%289192365016%29_%28cropped%29.jpg"
         />
         <Chat 
            name="Jessica"
            message="Oops there is he is ..."
            timestamp="1 week ago"
            profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Jessica_chastain_Cannes_2017.jpg/240px-Jessica_chastain_Cannes_2017.jpg"
         />
      </div>
   )
}

export default Chats;
