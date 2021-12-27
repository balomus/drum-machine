import { useState } from "react";
import Button from "./Button";

const DrumPad = ({bankOne, playSound}) => {

    return ( 
        <div id="drum-pad">
            {bankOne.map((value) => {
                return (
                    <Button button={value.button} id={value.id} key={value.id} playSound={playSound}/>
                )
            })}
        </div>
     );
}
 
export default DrumPad;