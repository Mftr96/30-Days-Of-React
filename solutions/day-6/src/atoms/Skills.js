//componente skill da utilizzare per skills
//definiamo props come skill che si aspetta array con due valori 
//creiamo il componente Skills che riutilizza Skills

const Skill=({skill:[tech,level]})=>(
    <li>
    {tech} {level}
  </li>
);


//IMPORTANTE:  nell'esecuzione di cicli map, bisogna inserire la key all'interno della funzione
const Skills=({skills})=>{
  const skillsList= skills.map((skill, index) => <Skill key={index} skill={skill}/>);
  console.log(skillsList);
  return <ul>{skillsList}</ul>
}


export default Skills;