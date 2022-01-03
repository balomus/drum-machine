import DrumPad from './DrumPad';
import Controls from './Controls';
import { useEffect, useState } from 'react';

function App() {
  // keyCode for 9 keys:
  // Q = 81 W = 87 E = 69
  // A = 65 S = 83 D = 68
  // Z = 90 X = 88 C = 67
  const bankOne = [
    {
        id: 'Heater-1',
        button: 'Q',
        keyCode: 81,
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
        id: 'Heater-2',
        button: 'W',
        keyCode: 87,
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
        id: 'Heater-3',
        button: 'E',
        keyCode: 69,
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
        id: 'Heater-4_1',
        button: 'A',
        keyCode: 65,
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
        id: 'Heater-6',
        button: 'S',
        keyCode: 83,
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
        id: 'Dsc_Oh',
        button: 'D',
        keyCode: 68,
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
        id: 'Kick_n_Hat',
        button: 'Z',
        keyCode: 90,
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
        id: 'RP4_KICK_1',
        button: 'X',
        keyCode: 88,
        url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
        id: 'Cev_H2',
        button: 'C',
        keyCode: 67,
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];

  const bankTwo = [
    {
        id: 'Chord_1',
        button: 'Q',
        keyCode: 81,
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    },
    {
        id: 'Chord_2',
        button: 'W',
        keyCode: 87,
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    },
    {
        id: 'Chord_3',
        button: 'E',
        keyCode: 69,
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
    },
    {
        id: 'Give_us_a_light',
        button: 'A',
        keyCode: 65,
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    },
    {
        id: 'Dry_Ohh',
        button: 'S',
        keyCode: 83,
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    },
    {
        id: 'Bld_H1',
        button: 'D',
        keyCode: 68,
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    },
    {
        id: 'punchy_kick_1',
        button: 'Z',
        keyCode: 90,
        url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    },
    {
        id: 'side_stick_1',
        button: 'X',
        keyCode: 88,
        url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    },
    {
        id: 'Brk_Snr',
        button: 'C',
        keyCode: 67,
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    }
  ];

  const bankEmpty = [
    {
        id: 'empty1',
        button: 'Q',
        keyCode: 81,
        url: '#'
    },
    {
        id: 'empty2',
        button: 'W',
        keyCode: 87,
        url: '#'
    },
    {
        id: 'empty3',
        button: 'E',
        keyCode: 69,
        url: '#'
    },
    {
        id: 'empty4',
        button: 'A',
        keyCode: 65,
        url: '#'
    },
    {
        id: 'empty5',
        button: 'S',
        keyCode: 83,
        url: '#'
    },
    {
        id: 'empty6',
        button: 'D',
        keyCode: 68,
        url: '#'
    },
    {
        id: 'empty7',
        button: 'Z',
        keyCode: 90,
        url: '#'
    },
    {
        id: 'empty8',
        button: 'X',
        keyCode: 88,
        url: '#'
    },
    {
        id: 'empty9',
        button: 'C',
        keyCode: 67,
        url: '#'
    }
  ];

  const [currentBank, setBank] = useState(bankOne);
  const [selectedBank, setSelectedBank] = useState(false);
  const [power, setPower] = useState(true);
  const [volume, setVolume] = useState('0.3');
  const [display, setDisplay] = useState(".");

  const updateBank = () => {
    if (power == false) {

    }
  }

  const logKeyDown = (e) => {
    console.log(e.keyCode);
    for (var i = 0; i < currentBank.length; i++)
    {
      if (e.keyCode === currentBank[i].keyCode)
      {
        // console.log("power is set to " + power.toString());
        if (power == true)
        {
          // console.log("volume is set to " + volume);
          playSound(document.getElementById(currentBank[i].id))
        }
      }
    }
  }

  useEffect(() => {
    console.log("useEffect ran");
    // document.addEventListener('keydown', logKeyDown);
    if (power === true)
    {
      if (selectedBank == false)
      {
        setBank(bankOne);
        console.log(currentBank);
      }
      else
      {
        setBank(bankTwo);
        console.log(currentBank);
      }
      
    }
    else{
      setBank(bankEmpty);
      console.log(currentBank);
    }
    // return () => {
    //   console.log('Component unmounted? removed event listener');
    //   document.removeEventListener('keydown', logKeyDown);
    // }
  }, [power]);

  useEffect(() => {
    document.addEventListener('keydown', logKeyDown);
    return () => {
      document.removeEventListener('keydown', logKeyDown);
    }
  });

  useEffect(() => {
    setDisplay("Volume " + Math.round(volume * 100));
  }, [volume]);

  useEffect(() => {
    if (selectedBank == false)
    {
      setDisplay("Heater Kit");
    }
    else
    {
      setDisplay("Smooth Piano Kit");
    }
  }, [currentBank])

  const playSound = (element) => {
    // console.log(power);
    element.volume = volume;
    console.log('Setting volume to ' + volume);
    element.currentTime = 0;
    element.play();
    setDisplay(element.id);
  }

  // useEffect(() => {
  //   console.log('useEffect #2 ran, added event listener ');
  //   document.addEventListener('keydown', logKeyDown);
  // }, []);

  return (
    <div className="App wrapper" id="drum-machine">
      <div className="container">
        <DrumPad currentBank={currentBank} playSound={playSound}></DrumPad>
        <Controls power={power} setPower={setPower} currentBank={currentBank} setBank={setBank} bankEmpty={bankEmpty} volume={volume} setVolume={setVolume} bankOne={bankOne} bankTwo={bankTwo} selectedBank={selectedBank} setSelectedBank={setSelectedBank} display={display} setDisplay={setDisplay}></Controls>
      </div>
    </div>
  );
}

export default App;