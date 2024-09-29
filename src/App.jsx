import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0)
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
  ]);

  const handleDisplayTeam = () => {
    if (!team) {
      return (
        <p>Pick some team members</p>
      )
    }
  }

  const handleAddFighter = (zombieName) => {
    const searchAddition = zombieFighters.filter(zombie => zombie.name === zombieName);
    if (searchAddition[0].price > money) {
      console.log('Not enough money');
    } else {
      console.log('Price:', searchAddition[0].price)
      console.log('money', money)
      setMoney(money - searchAddition[0].price);
      setTeam([...team, ...searchAddition]);
    };
  };

  return (
    <>
      <section className='teamAndSponsorData'>
        <section className='subSection'>
          <h1>Zombie Fighters</h1>
          <h2>money: {money}</h2>
          <h2>Team Strength: { }</h2>
          <h2>Team Agiliti: { }</h2>
        </section>
      </section>
      <section id='teamDisplay'>
        <h2>Team: {team.length === 0 ? (<p><small>Pick some team members</small></p>) : team.map((el, i) => {
          return (
            <>
              <ul className='ulOne' key={el.name}>
                <li className='teamLi'><img src={el.img} alt="" /></li>
                <li className='teamLi'>{el.name}</li>
                <li className='teamLi'>Price: {el.price}</li>
                <li className='teamLi'>Strength: {el.strength}</li>
                <li className='teamLi'>Agility: {el.agility}</li>
              </ul>
            </>
          )
        })}</h2>
      </section>

      {zombieFighters.map((zombie, index) => {
        return (
          <>
            <section>
              <ul key={zombie.name}>
                <li><img src={zombie.img} alt="" /></li>
                <li>{zombie.name}</li>
                <li>Price: {zombie.price}</li>
                <li>Strength: {zombie.strength}</li>
                <li>Agility: {zombie.agility}</li>
                <button onClick={() => handleAddFighter(zombie.name)}>add</button>
              </ul>
            </section >
          </>
        )
      }
      )}
      <p>This is the team:{console.log('This is the team:', team)}</p>
    </>
  );
}

export default App;