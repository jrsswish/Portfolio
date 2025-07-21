import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className='logo' style={{display: "flex", justifyContent:'space-around', alignItems:'center'}}>
        <p className="name">John Rey Quidet</p>
        <div className='options' style={{display:"flex"}}>
          <Link className='home' to='/' style={{textDecoration:"none"}}>Home</Link>
          <Link className='projects' to='/projects' style={{textDecoration:"none"}}>Projects</Link>
          <Link className='contacts' to='/contacts' style={{textDecoration:"none"}}>Contacts</Link>    
        </div>
      </div>
      <div className="description"> 
        <p>I am a 3rd year university student from University of Saskatchewan. I am interested in learning machine learning algorithms and data related field.</p>
        <img src="pfp.jpg"></img>

      </div>
    </div>

  );
}

export default Home;
