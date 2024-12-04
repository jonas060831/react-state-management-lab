// src/App.jsx

import { useState } from "react";

import './App.css'

const App = () => {

   const [team, setTeam] = useState([])
   const [money, setMoney] = useState(100)
   const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ])

  // 3. Create a function named handleAddFighter.
  //This function will be triggered when you click the Add button for any character
  //in the zombieFighters list
  const handleAddFighter = (selectedCharacter) => {
    //3.1 When you click Add on a character, this function should add the selected character’s object
    //to the team state array. This is how you build your team.
    setTeam([...team, selectedCharacter])
    
  }

  return (
    <>
      
      <h1>Zombie Fighters</h1>
      {/* 2. Display the current value of money in the UI */}
      <h2>Money: {money}</h2>

      {/* 
      1. Display the list of zombieFighters by mapping the array into the UI
      of App.jsx. (We’ve provided some helpful CSS assuming you use a ul and lis)
      */}
      <ul>
        {
          zombieFighters.map( (fighter, index) => (
            <li key={index}>
              <img src={fighter.img} alt={fighter.img} /> <br />
              {fighter.name} <br />
              Price: {fighter.price} <br />
              Strength: {fighter.strength} <br />
              Agility: {fighter.agility} <br />

              <button onClick={() => handleAddFighter(fighter)}>Add</button>
            </li>
          ))
        }
      </ul>

    </>
  );
}

export default App
