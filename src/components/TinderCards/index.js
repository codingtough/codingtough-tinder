import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import database from '../Firebase';

function TinderCards() {
   const [people, setPeople] = useState([
      {
         name: 'Steve Jobs', 
         url: 'https://www.biography.com/.image/t_share/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg'
      },
      {
         name: 'Mark Zuckerberg', 
         url: 'https://media.vanityfair.com/photos/5f1b08fd154906605854d34c/master/pass/Zuck734.jpg'
      }
   ]);

   useEffect(() => {
      const unsubscribe = database
         .collection('people')
         .onSnapshot(snapshot => 
            setPeople(snapshot.docs.map(doc => doc.data()))
         );
      return () => {
         unsubscribe();
      }
   }, []);
   
   return (
      <div>
         <div className="tinderCards__cardContainer">
            {people.map(person => (
               <TinderCard
                  className="swipe"
                  key={person.name}
                  preventSwipe={['up', 'down']}
               >
                  <div 
                     style={{backgroundImage: `url(${person.url})`}}
                     className="card"
                  >
                     <h3>{person.name}</h3>
                  </div>
               </TinderCard>
            ))}
         </div>
      </div>
   )
}

export default TinderCards;
