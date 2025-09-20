const UserCard=({user:{firstName,lastName,image} })=>(
<div>
  <img src={image} alt={firstName}/>
  <h2>
    {firstName} {lastName}
  </h2>
</div>
);

export default UserCard;