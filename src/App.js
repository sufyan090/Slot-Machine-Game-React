// import logo from './logo.svg';
import './App.css';
// import Cards from './Components/Cards';
// import Sdata from './Components/Sdata';
// import reactlogo from "./images/react.png";
// import pythonlogo from "./images/python.png";
// import nextjslogo from "./images/next-js.png";
// import jslogo from "./images/javascript.png";
// import CsharpLogo from "./images/Csharp_Logo.png";
import SlotMachineGame from './Components/SlotMachineGame';

function App() {

  return (
    <>

      <h1 className='heading'>
        WELCOME TO 🎰<span style={{ fontWeight: "bold", color: "green" }}>SLOT MACHINE GAME 🎰</span>
      </h1>

      <div className='gameStyle'>
        <SlotMachineGame x="😄" y="😄" z="😄" />
        <SlotMachineGame x="💃" y="👍" z="💯" />
        <SlotMachineGame x="😠" y="👼" z="🥇" />
        <SlotMachineGame x="😄" y="😄" z="😄" />
        <SlotMachineGame x="💃" y="💃" z="💃" />
        <SlotMachineGame x="😠" y="😄" z="😄" />
      </div>
    </>
  )
}

export default App;
