import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='logo' style={{display: "flex", justifyContent:'space-around', alignItems:'center'}}>
      <p className="name">John Rey Quidet</p>
      <div className='options' style={{display:"flex", textDecoration:"none",}}>
        <Link className='home' to='/'>Home</Link>
        <Link className='projects' to='/projects'>Projects</Link>
        <Link className='contacts' to='/contacts'>Contacts</Link>
      </div>
    </div>
  );
}

export default Home;
