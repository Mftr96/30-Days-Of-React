const Numbers=({numbers})=>{
  const list=numbers.map((number)=><li>{number}</li>);
  return list;
}

export default Numbers;