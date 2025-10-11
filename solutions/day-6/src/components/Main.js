import SquareContainer from '../exercise/SquareContainer.js';

const techs = ['HTML', 'CSS', 'JAVASCRIPT'];

const techFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);

      const main = (
      <main>
        <div className='main-wrapper'>
          <p>prerequisiti per react:</p>
          <ul>{techFormatted} </ul>
        </div>
        <SquareContainer/>
      </main>
      
      );
    //  console.log(NumberGenerator);


export default main;