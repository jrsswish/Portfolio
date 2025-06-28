
function Home() {
  return (
    <div className='logo' style={{display: "flex", justifyContent:'space-around', alignItems:'center'}}>
      <p className="name">John Rey Quidet</p>
      <div className='options' style={{display:"flex", textDecoration:"none",}}>
        <a className='home' href='localhost:3000/home'>Home</a>
        <a className='projects'>Projects</a>
        <a className='contacts'>Contacts</a>
      </div>
    </div>
  );
}

export default Home;
