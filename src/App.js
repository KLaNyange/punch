import { useState } from 'react';
import './App.css';
import Buttons from './components/Buttons/Buttons';
import Image from './components/Image/Image';
import ProgressBar from './components/ProgressBar/ProgressBar';

function App() {

  function punch(){
    setVie(vie-10)
  }
  function restart(){
    setVie(100)
  }
  const [vie, setVie] = useState(100)
  return (
    <div className="App">
      <ProgressBar vie = {vie} />
      <Image vie = {vie}/>
      <Buttons punch={punch} restart={restart} vie={vie} />
    </div>
  );
}

export default App;
