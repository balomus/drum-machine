import { useState } from "react";
import Button from "./Button";

const DrumPad = ({currentBank, playSound}) => {

    return ( 
        <div id="drum-pad">
            {currentBank.map((current) => {
                return (
                    <Button button={current.button} id={current.id} key={current.id} playSound={playSound} url={current.url}></Button>
                )
            })}
        </div>
     );
}
 
export default DrumPad;