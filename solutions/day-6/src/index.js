//index.js
// importing the react and react-dom package

import React from 'react'
//attenzione che se metti metodo vecchio react/dom non ti funziona da react 19 
import { createRoot } from 'react-dom/client'
import screenshot from './images/Screenshot 2024-10-16 193212.png';
import Numbers from './atoms/Numbers.js';
import Button from './atoms/Button.js';
import Skills from './atoms/Skills.js';
import Header from './components/Header.js';
import main from './components/Main.js';
import footer from './components/Footer.js';
//mettere sempre gli import prima di tutto
console.log(React);
const rootElement = document.getElementById('root');

const skills=[
  ['HTML','7',],
  ['CSS','8',],
  ['JS','6,5'],
];

const countries=[
  {name:'Finland', city:'Helsinki'},
  {name:'Sweden', city:'Stockholm'},
  {name:'Denmark', city:'Copenhagen'},
  {name:'Norway', city:'Oslo'},
  {name:'Italy', city:'Roma'},
]

const Skill=({skill:[tech,level]})=>(
    <li>
    {tech} {level}
  </li>
)
//creiamo il componente Skills che riutilizza Skills

//componente country con array di oggetti
const Country= ({country:{name,city}}) =>{
  return (
<div>
  <h2>{name}</h2>
  <small>{city}</small>
</div>
  )
}


const Countries=({countries}) =>{
  const countryList=countries.map((country)=> <Country country={country}/>);
  return <div>{countryList}</div>;
}


  /*oppure mettendo in una costante(usando solo una graffa in questo caso)
  const style={border:'2px solid orange', color:'black', fontSize:'18px'}
  e dentro header passiamo <header style={style}></header>
  */




//test per le somme
const numOne = 3;
const numTwo = 2;
const result = (
  <p>
    {numOne} +{numTwo} ={numOne + numTwo}
  </p>
);

const yearBorn = 1820;
const currentYear = new Date().getFullYear();
const age = currentYear - yearBorn;
const personAge = <p> {age} </p>;

//IMPORTANTE:  nell'esecuzione di cicli map, bisogna inserire la key all'interno della funzione
const inputStyle={width: '600px', margin:'0 auto'};
const inputForm = (
  <div style={inputStyle}>
    <form action="">
      <h1>per informazioni clicca qui</h1>
      <p>iscriviti per ricevere informazioni</p>
      <div>
        <input type="text" placeholder="inserisci nome"/>
        <input type="text" placeholder="inserisci cognome"/>
        <input type="mail" placeholder="inserisci mail"/>
        <button type="submit">invia</button>
      </div>

    </form>
  </div>
);


const UserCard=({user:{firstName,lastName,image} })=>(
<div>
  <img src={image} alt={firstName}/>
  <h2>
    {firstName} {lastName}
  </h2>
</div>
);


      const footerStyles = {
        backgroundColor: '61DBFB',
    }

      const user=(
      <div>
        <img src={screenshot} alt='screenshot' />
      </div>

      );


      const App = () =>{
        const numbers=[1,2,3,4];
        const data={
          welcome:'benvenuto',
          title:'partendo React',
          subtitle:'librerie',
          author:{
            firstName:'Matteo',
            lastName:'Federici',
          },
          date:new Date(),
        }
        const sayHi=()=>{
          alert('Hi');
        }
        const greetPeople=()=>{
          alert('Benvenuto alla sfida di React!');
        }
        const handleTime= ()=>{
          alert(new Date); 
        }

        return(
        <div className='app'>            
        <Header data={data}/>
        <Numbers numbers={numbers}/>
        <Countries countries={countries} />
        <Skills skills={skills}/>
        <Button text='say hi' onClick={sayHi}/>
        <Button text='clicca per il benvenuto' onClick={handleTime}/>
        {main}
        {footer}

      
      </div>)
      }

      const root = createRoot(rootElement);
      //non c'è bisogno di utilizzare rootElement con il metodo render
      root.render(<App />);
