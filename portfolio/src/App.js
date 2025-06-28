import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='logo' style={{display: "flex", justifyContent:'space-around', alignItems:'center'}}>
      <p className="name">John Rey Quidet</p>
      <div className='options' style={{display:"flex", textDecoration:"none"}}>
        <a className='home'>Home</a>
        <a className='projects'>Projects</a>
        <a className='contacts'>Contacts</a>
      </div>
    </div>
  );
}

export default App;
