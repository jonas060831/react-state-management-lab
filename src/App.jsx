// src/App.jsx

import { useEffect, useState } from "react";

import './App.css'

const App = () => {

   const [team, setTeam] = useState([])
   const [money, setMoney] = useState(100)

   {/* 5.1 Initialize a new state variable named totalStrength. Set its initial value to 0. */}
  const [totalStrength, setTotalStrength] = useState(0)

  {/*Start by defining a state variable named totalAgility, initializing it at 0*/}
  const [totalAgility, setTotalAgility] = useState(0)


   const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'images/92c952.png',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'images/771796.png',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'images/24f355.png',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'images/d32776.png',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'images/1ee8a4.png',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'images/66b7d2.png',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'images/56acb2.png',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'images/8985dc.png',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'images/392537.png',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'images/602b9e.png',
    },
  ])
  

  // 3. Create a function named handleAddFighter.
  //This function will be triggered when you click the Add button for any character
  //in the zombieFighters list
  // const handleAddFighter = (selectedCharacter) => {

  //   //3.3 Before adding a character to the team, check if you have enough money to afford them.
  //   //If your money is less than the character’s price,
  //   //you shouldn’t be able to add them. In such cases,
  //   //log a message to the console such as "Not enough money"
  //   if(money < selectedCharacter.price) {
  //     console.log("Not enough money")
  //   } else {

  //     //3.1 When you click Add on a character, this function should add the selected character’s object
  //     //to the team state array. This is how you build your team.
  //     setTeam([...team, selectedCharacter])
  //     //3.2 Each character comes with a price. Upon adding a character to your team,
  //     //subtract the character’s price from your current money value.
  //     //Think of it as spending money to recruit a team member.
  //     setMoney(prevValue => {
  //       return prevValue - selectedCharacter.price
  //     })
  //   } 
  // }

  // 5.2 Whenever a character is added or removed from the team, recalculate the total strength.
  //This calculation should sum up the strength values of all characters currently in the team.
  //(A great case for a helper function!)
  const recalculateTotalStrength = (team) => {
    
    //reduce
    const newStrength =  team.reduce((accumulator, m) => accumulator + m.strength , 0)
    
    setTotalStrength(newStrength)
  }

  //6.2 Just like with strength, recalculate total agility whenever there’s a change in the team.
  //This should be the sum of the agility values of all the team members.
  const recalculateTotalAgility = (team) => {

    //reduce
    const newAgility =  team.reduce((accumulator, m) => accumulator + m.agility , 0)
    
    setTotalAgility(newAgility)
  }

  const handleAddFighter = (fighter) => {

    if(money >= fighter.price) {
      //using the spread operator add the new fighter to the team variable
      //make it a habit to do this
      const updatedTeam = [...team, fighter]
      //and then update the state
      setTeam(updatedTeam)

      setMoney(money - fighter.price)

      recalculateTotalStrength(updatedTeam)
      recalculateTotalAgility(updatedTeam)
    } else {
      console.log('Not enough money')
    }
  }
  // 8. Create a function named handleRemoveFighter. This handler function is key to managing your team. This function enables you to remove characters, adjusting the total strength, agility, and budget of your team accordingly.
  
  //8.5 Ensure that the UI reflects the removal of the character from your team. This includes updates to the total strength and agility displays, and the available budget.
  const handleRemoveFighter = ( fighterIndex) => {
    
    //8.2 This function should determine which character needs to be removed based on user
    //interaction (usually, this is passed via an identifier like an ID or an index in the array).
    //sorry :( i shortcut and add the index to the parameter of the function
    //I didnt realize i should reference the whole zombieFighter array
    // setTeam(prevTeam => {
    //   //8.3 Once the character to be removed is identified,
    //   //the team state should be updated to exclude this character.
    //   //This can be achieved by creating a new array that filters out the selected character.
    //   return prevTeam.filter( (member, memberIndex) => index !== memberIndex )
    // })

    //exclude the fighter by it index in the team state
    //i need to make this a habit when im deleting something from the array to use filter
    const newTeam = team.filter( (_, index) => index !== fighterIndex)
    setTeam(newTeam)

    //8.4 Increase the money state by the price of the removed character, effectively refunding the cost to your budget.
    //since we have the fighterIndex is equivalent to array index of team we can acces the object of thing that we are trying to remove{}
    const fighterCost = team[fighterIndex].price
    //add it back to the pool of money
    setMoney(money + fighterCost)

    recalculateTotalStrength(newTeam)
    recalculateTotalAgility(newTeam)
  }

  return (
    <>
      
      <h1>Zombie Fighters</h1>
      {/* 2. Display the current value of money in the UI */}
      <h2>Money: {money}</h2>
      {/* 5.Display Total Team Strength: In this step,
       you’ll create a state to keep track of the total strength of your team and display it in the UI.
      */}
      {/* 5.3 Show the value of totalStrength in the UI. If the team array is empty,
      totalStrength should be 0. */}
      <h2>Team Strength: {team.length === 0 ? '0' : totalStrength} </h2>

      {/* 6. Display Total Team Agility: Similarly, create a state for the total agility of your team and display this value in the UI. */}
      {/* 6.3 I already did this one  */}
      <h2>Team Agility: { team.length === 0 ? '0' : totalAgility }</h2>

      {/* 4.Now that you can add characters to your team,
      let’s focus on displaying and managing them within your application’s interface. */}
      <h2>Team:</h2>
      {
        // 4.1 First, verify if your team array has any characters in it.
        //If the team array length is 0,
        //display Pick some team members! in the UI.
        team.length === 0 ?
        (
          <p>Pick some team members! </p>
        ):(
          // 4.2 If there are characters in your team, display each one in the UI. 
          //For each character in the team array,
          //show their: name, image, price, strength, and agility.
          //Follow the same pattern you used to display the array of all characters.
          <ul>
            {
              team.map( (member, index) => (
                <li key={index}>
                  {member.name} <br />
                  <img src={member.img} alt={member.img} /> <br />
                  Price: {member.price} <br />
                  Strength: {member.strength} <br />
                  Agility: {member.agility} <br />
                  {/* 7. Add a Remove button to each of the characters on your team.
                  This button, when clicked, should call a handler function to remove the
                  character from your team. */}
                  {/* 8.1 this function will be executed when you click the remove button for a character in your team */}
                  <button onClick={() => handleRemoveFighter(index)}>Remove</button>
                </li>
              ))
            }
          </ul>
        )
      }
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

              <button onClick={() => handleAddFighter(fighter) }>Add</button>
            </li>
          ))
        }
      </ul>

    </>
  );
}

export default App
