import DrumPad from './DrumPad';
import Controls from './Controls';

function App() {
  return (
    <div className="App wrapper" id="drum-machine">
      <div className="container">
        <DrumPad></DrumPad>
        <Controls></Controls>
      </div>
    </div>
  );
}

export default App;
