const Button=(props) =>{
  // mi raccomando le parentesi dentro il return sennò si spacca !
  return( 
  <button onClick={props.onClick}>{props.text}</button>
)

};


export default Button;