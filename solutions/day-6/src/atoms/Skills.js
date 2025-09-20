const Skills=({skills})=>{
  const skillsList= skills.map((skill) => <Skill skill={skill}/>);
  console.log(skillsList);
  return <ul>{skillsList}</ul>
}


export default Skills;