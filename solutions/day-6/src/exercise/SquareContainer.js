import Square from "./Square";
const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '800px',
    border: '1px solid green'
};



const SquareContainer = () => {
    const squares = Array.from({ length: 32 }, (_, i) => i + 1);
    console.log(squares);
    return(
        <div style={containerStyle}>
            {squares.map((index)=>(
                

                <Square key={index} number={index}/>
            ))} 
        </div>
    )     
}


export default SquareContainer;