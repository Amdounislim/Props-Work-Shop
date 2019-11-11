import React from 'react';
import './App.css';
import Nav from './NavBar'
import Card from './Card'


function App() {

  let arr=[{name: "Slim", email:"slim.gmail.com", image:"https://img.lemde.fr/2019/04/22/0/191/1619/1079/688/0/60/0/e39da8d_2FIads9h8wB-0SwSgxVaVWsp.jpg"},
  {name: "Hamdi", email:"hamdi.gmail.com"},
  {name: "Ani", email:"anis.gmail.com"},
  {name: "Fathi", email:"fathi.gmail.com"},
  {name: "Amina", email:"amina.gmail.com"}]

  return (
    <div className="App">
      <Nav title="Contact List"/>
      <div className="list">
      {arr.map(el=><Card name={el.name} email={el.email} image={el.image}/>)}
      
      </div>

    </div>
  );
}

export default App;
