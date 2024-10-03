import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const initialZombies = [
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
]

function App() {

  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0)
  const [totalAgility, setTotalAgility] = useState(0)
  const [zombieFighters, setZombieFighters] = useState(initialZombies);

  useEffect( () => {
    if(team.length){
      handleTotalStrength();
      handleTotalAgility();
    }else{
      setTotalStrength(0)
      setTotalAgility(0)
    }
  }, [team])

  const handleTotalStrength = () => {
    console.log(team)
    const teamStrength = team.reduce((total, member) => total + member.strength, 0);
    console.log(`Team strength ${teamStrength}`)
    setTotalStrength(teamStrength)
  }

  const handleTotalAgility = () => {
    const teamStrength = team.reduce((total, member) => total + member.agility, 0);
    setTotalAgility(teamStrength)
  }

  const findZombie = (zombieName) => {
    return initialZombies.find(zombie => zombie.name === zombieName)
  }

  const getUpdatedZombieList = (arr, zombieName) => {
    return arr.filter(el => el.name !== zombieName);
  };

  const handleAddFighter = (zombieName) => {
    const selectedZombie = findZombie(zombieName)
    const newZombieFighters = getUpdatedZombieList(zombieFighters, zombieName)
    if (selectedZombie.price > money) {
      console.log('Not enough money');
    } else {
      setMoney(money - selectedZombie.price);
      setTeam([...team, selectedZombie]);
      setZombieFighters(newZombieFighters)
    };
  };

  const handleRemoveFighter = (zombieName) => {
    const selectedZombie = findZombie(zombieName)
    const membersLeft = getUpdatedZombieList(team, zombieName)
    setTeam(membersLeft);
    setZombieFighters([...zombieFighters, selectedZombie])
  };

  return (
    <>
      <section className='teamAndSponsorData'>
        <section className='subSection'>
          <h1>Zombie Fighters</h1>
          <h2>money: {money}</h2>
          <h2>Team Strength: {totalStrength}</h2>
          <h2>Team Agiliti: {totalAgility}</h2>
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
                <button onClick={() => handleRemoveFighter(el.name)}>Remove</button>
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