# giorno 5: utilizzo delle props

per passare in modo corretto le props,bisogna bassare l'oggetto props nella creazione della costante 

```jsx
/*passando l'oggetto props abbiamo la possibilità di creare
dei segnaposto, per cui il componente potrà essere usato
più volte con contenuto diverso a seconda del bisogno*/
const Button=(props) =>{
  // mi raccomando le parentesi dentro il return sennò si spacca !
  // per passare stile come componente si può fare style={{stileCamelCase:'proprietà'}}
  return( 
  <button onClick={props.onClick}>{props.text}</button>)

};
```

per passare un event handler si può andare a dichiarare direttamente anche dentro le graffe
```jsx
const App= ()=>{
    return (

        <div className='app'>
            {/* non mettere punto virgola dentro graffa se passi funzione come props */}
            <Button onClick={()=>alert(hi);}/>
        </div>
    )
}
```


invece che passare dei valori attravarso props, possiamo direttamente creare noi un oggetto con le nostre coppie di chiave-valore e alla creazione del componente passargli un oggetto creato su misura per il componente.
```jsx

```


