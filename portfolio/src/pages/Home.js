import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='logo' style={{display: "flex", justifyContent:'space-around', alignItems:'center'}}>
      <p className="name">John Rey Quidet</p>
      <div className='options' style={{display:"flex"}}>
        <Link className='home' to='/' style={{textDecoration:"none"}}>Home</Link>
        <Link className='projects' to='/projects' style={{textDecoration:"none"}}>Projects</Link>
        <Link className='contacts' to='/contacts' style={{textDecoration:"none"}}>Contacts</Link>
      </div>
    </div>
  );
}

export default Home;
