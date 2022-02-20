const Controls = (props) => {

    const togglePower = () => {
        if(props.power === true)
        {
            props.setBank(props.bankEmpty);
            props.setDisplay(" ");
        }
        else 
        {
            if (props.selectedBank === false)
            {
                props.setBank(props.bankOne);
            }
            else
            {
                props.setBank(props.bankTwo);
            }
        }
        props.setPower(!props.power);
    }

    const toggleBank = () => {
        if (props.selectedBank === true)
        {
            props.setBank(props.bankOne);
        }
        else if (props.selectedBank === false)
        {
            props.setBank(props.bankTwo);
        }
        props.setSelectedBank(!props.selectedBank);
    }

    const updateVolume = (e) => {
        props.setVolume(e.target.value);
    }

    return ( 
        <div id="controls" class="controls">

            <div>Power</div>
            <label className="switch">
                <div class="relative">
                    <input type="checkbox" id="toggleB" class="sr-only" checked={props.power} onChange={togglePower}/>
                    <div class="switch-line"></div>
                    <div class="switch-dot"></div>
                </div>
            </label>

            <div id="display">{props.display}</div>

            <div>
                <input class="range-slider" type="range" step="0.01" min="0" max="1" value={props.volume} onChange={updateVolume}></input>
            </div> 

            <div>Bank</div>
            <label className="switch">
                <div class="relative">
                    <input type="checkbox" id="toggleB" class="sr-only" checked={props.selectedBank} onChange={toggleBank}/>
                    <div class="switch-line"></div>
                    <div class="switch-dot"></div>
                </div>
            </label>

        </div>
     );
}
 
export default Controls;