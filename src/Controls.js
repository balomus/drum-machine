const Controls = (props) => {

    const togglePower = () => {
        if(props.power == true)
        {
            console.log("setting bank to empty")
            props.setBank(props.bankEmpty);
            props.setDisplay(" ");
        }
        else 
        {
            // console.log("setting bank to currentBank" + props.currentBank)
            if (props.selectedBank == false)
            {
                console.log("setting bank to bankOne");
                props.setBank(props.bankOne);
            }
            else
            {
                console.log("setting bank to bankTwo");
                props.setBank(props.bankTwo);
            }
        }
        props.setPower(!props.power);
    }

    const toggleBank = () => {
        if (props.selectedBank == true)
        {
            props.setBank(props.bankOne);
        }
        else if (props.selectedBank == false)
        {
            props.setBank(props.bankTwo);
        }
        props.setSelectedBank(!props.selectedBank);
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
            {/* <div>Power is set to {props.power.toString()}</div> */}
            <div id="display">{props.display}</div>
            <div>
                <input type="range" step="0.01" min="0" max="1" value={props.volume} onChange={updateVolume}></input>
            </div> 
            <div>Bank</div>
            <label className="switch">
                <input type="checkbox" checked={props.selectedBank} onChange={toggleBank}/>
                <span className="slider"></span>
            </label>
        </div>
     );
}
 
export default Controls;