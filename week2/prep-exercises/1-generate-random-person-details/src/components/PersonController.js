import React, {useState, useEffect} from 'react'
import Person from './Person';

export default function PersonController() {
    const [person, setPerson] = useState(null);

    const getPerson = async () => {
      const response = await fetch('https://www.randomuser.me/api?results=1');
      const data = await response.json();
      setPerson(data.results[0]);
      console.log(data.results[0])
      console.log(person)
    };
    
    useEffect(() => {
      getPerson();
    }, []);
    return (
    <div>
      <Person person={person}/>
    </div>
  )
}
