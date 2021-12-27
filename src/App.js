import DrumPad from './DrumPad';
import Controls from './Controls';
import { useEffect, useState } from 'react';

function App() {
  // keyCode for 9 keys:
  // Q = 81 W = 87 E = 69
  // A = 65 S = 83 D = 68
  // Z = 90 X = 88 C = 67

  const [bankOne, setBankOne] = useState([
        {
            id: 'Heater-1',
            button: 'Q',
            keyCode: 81
        },
        {
            id: 'Heater-2',
            button: 'W',
            keyCode: 87
        },
        {
            id: 'Heater-3',
            button: 'E',
            keyCode: 69
        },
        {
            id: 'Heater-4_1',
            button: 'A',
            keyCode: 65
        },
        {
            id: 'Heater-6',
            button: 'S',
            keyCode: 83
        },
        {
            id: 'Dsc_Oh',
            button: 'D',
            keyCode: 68
        },
        {
            id: 'Kick_n_Hat',
            button: 'Z',
            keyCode: 90
        },
        {
            id: 'RP4_KICK_1',
            button: 'X',
            keyCode: 88
        },
        {
            id: 'Cev_H2',
            button: 'C',
            keyCode: 67
        }
    ]);

  const logKeyDown = (e) => {
    console.log(e.keyCode);
    for (var i = 0; i < bankOne.length; i++)
    {
      if (e.keyCode == bankOne[i].keyCode)
      {
        playSound(document.getElementById(bankOne[i].id))
      }
    }
  }

  useEffect(() => {
    console.log("useEffect ran");
    document.addEventListener('keydown', logKeyDown);
  }, []);

  const playSound = (element) => {
    element.currentTime = 0;
    element.play();
  }

  return (
    <div className="App wrapper" id="drum-machine">
      <div className="container">
        <DrumPad bankOne={bankOne} playSound={playSound}></DrumPad>
        <Controls></Controls>
      </div>
    </div>
  );
}

export default App;