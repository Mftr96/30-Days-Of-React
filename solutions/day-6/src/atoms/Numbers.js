
//componente numbers per provare map

const Numbers=({numbers})=>{
  const list=numbers.map((number, index)=><li key={index}>{number}</li>);
  return list;
}

export default Numbers;