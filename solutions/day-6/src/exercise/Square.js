const squareStyle = {
    width: 'calc(800px / 8 - 1px )',
    height: '100px',
    border: '1px solid red',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
};


const Square = (props) => {
    if(props.number % 2 ===0 || props.number===2){
        console.log("numero primo");
    }
    return(
    <div className="square" style={squareStyle}>
      {props.number}  
    </div>
    )
    

};

export default Square;