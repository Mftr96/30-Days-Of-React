const techs = ['HTML', 'CSS', 'JAVASCRIPT'];

const techFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);

      const main = (
      <main>
        <div className='main-wrapper'>
          <p>prerequisiti per react:</p>
          <ul>{techFormatted} </ul>
        </div>
      </main>
      );


export default main;