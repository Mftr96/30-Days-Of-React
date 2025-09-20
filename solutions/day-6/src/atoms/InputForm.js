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

export default inputForm;