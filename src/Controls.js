const Controls = (props) => {

    const togglePower = () => {
        if(props.power == true)
        {
            console.log("setting bank to empty")
            props.setBank(props.bankEmpty);
        }
        else 
        {
            console.log("setting bank to currentBank" + props.currentBank)
            props.setBank(props.currentBank);
        }
        props.setPower(!props.power);
    }

    const toggleBank = (e) => {
        console.log(e.target.value);
    }

    const updateVolume = (e) => {
        // console.log(e.target.value);
        props.setVolume(e.target.value);
        
    }

    return ( 
        <div id="controls">
            <div>Power</div>
            <label className="switch">
                <input type="checkbox" checked={props.power} onChange={togglePower}/>
                <span className="slider"></span>
            </label>
            <div>Power is set to {props.power.toString()}</div>
            <div id="display">Display goes here</div>
            <div>
                <input type="range" step="0.01" min="0" max="1" value={props.volume} onChange={updateVolume}></input>
                Volume: {props.volume}
            </div> 
            <div>Bank</div>
            {/* <label className="switch">
                <input type="checkbox" checked={false} onChange={toggleBank}/>
                <span className="slider"></span>
            </label> */}
        </div>
     );
}
 
export default Controls;