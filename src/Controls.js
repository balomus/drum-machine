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

    return ( 
        <div id="controls">
            <div>Power</div>
            <label className="switch">
                <input type="checkbox" checked={props.power} onChange={togglePower}/>
                <span className="slider"></span>
            </label>
            <div>Power is set to {props.power.toString()}</div>
            <div id="display">Display goes here</div>
        </div>
     );
}
 
export default Controls;