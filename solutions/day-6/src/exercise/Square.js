
function isPrimeNumber(number){
    if(number <= 1) return false;
    if(number === 2) return true;

    const numberArray = Array.from({ length: number }, (_, i) => i + 1);
     //console.log(numberArray);
     //TO-DO: lavorare sulla condizione per il numero primo 
    for (let i = 2; i <= Math.sqrt(number); i++) { // Controlliamo fino alla radice quadrata di n
    if (number % i === 0) { // Se n è divisibile per i, non è primo
      return false;
    }
}
return true;
}

console.log(isPrimeNumber(9));
const Square = (props) => {
    const squareStyle = {
    width: 'calc(800px / 8 - 1px )',
    height: '100px',
    border: '1px solid red',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    //checking if is prime, even or odd number
    background:isPrimeNumber(props.number)? 'red' : props.number % 2==0? 'green' : 'yellow',  
};
    return(
    <div style={squareStyle}>
      {props.number}  
    </div>
    )
    

};

export default Square;