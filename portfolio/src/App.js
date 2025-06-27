import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='logo' style={{display: "flex"}}>
      <h1 className="name">John Rey Quidet</h1>
      <div className='options' style={{display:"flex", textDecoration:"none"}}>
        <a className='home'>Home</a>
        <a className='projects'>Projects</a>
        <a className='contacts'>Contacts</a>
      </div>
    </div>
  );
}

export default App;
