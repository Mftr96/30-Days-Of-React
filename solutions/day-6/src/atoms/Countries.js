

//componente country con array di oggetti

const Country= ({country:{name,city}}) =>{
  return (
<div>
  <h2>{name}</h2>
  <small>{city}</small>
</div>
  )
}
const Countries=({countries}) =>{
  const countryList=countries.map((country, index)=> <Country key={index} country={country}/>);
  return <div>{countryList}</div>;
}

export default Countries;