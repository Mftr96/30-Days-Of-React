const Header = ({
  data:{
    welcome,
    title,
    subtitle,
    author:{firstName, lastName },
    numbers,

  }
})=>{
  return (
    <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <p>{firstName} {lastName}</p>
      

    </div>
  </header>)
  /*oppure mettendo in una costante(usando solo una graffa in questo caso)
  const style={border:'2px solid orange', color:'black', fontSize:'18px'}
  e dentro header passiamo <header style={style}></header>
  */

};

export default Header;