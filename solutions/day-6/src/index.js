// importing the react and react-dom package

import React from 'react'
//attenzione che se metti metodo vecchio react/dom non ti funziona da react 19 
import { createRoot } from 'react-dom/client'
import screenshot from './images/Screenshot 2024-10-16 193212.png';
import Numbers from './atoms/Numbers.js';
import Button from './atoms/Button.js';
import Skills from './atoms/Skills.js';
import Countries from './atoms/Countries.js';
import inputForm from './atoms/InputForm.js';
import Header from './components/Header.js';
import main from './components/Main.js';
import footer from './components/Footer.js';
import UserCard from './atoms/UserCard.js';
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

  /* per lo stile oppure mettendo in una costante(usando solo una graffa in questo caso)
  const style={border:'2px solid orange', color:'black', fontSize:'18px'}
  e dentro header passiamo <header style={style}></header>
  */



      const footerStyles = {
        backgroundColor: '#61DBFB',
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
        <Skills skills={skills}/>
        <Countries countries={countries} />
        <Button text='clicca per il benvenuto' onClick={handleTime}/>
        <Button text='say hi' onClick={sayHi}/>
        {main}
        {footer}
      </div>)
      };

      const root = createRoot(rootElement);
      //non c'è bisogno di utilizzare rootElement con il metodo render
      root.render(<App />);
