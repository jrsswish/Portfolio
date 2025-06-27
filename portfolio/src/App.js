import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='logo' style={{display: "flex"}}>
      <h1 className="name">John Rey Quidet</h1>
      <div className='options' style={{display:"flex"}}>
        <h1 className='home'>Home</h1>
        <h1 className='projects'>Projects</h1>
        <h1 className='contacts'>Contacts</h1>
      </div>
    </div>
  );
}

export default App;
