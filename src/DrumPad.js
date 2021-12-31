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
            {/* {currentBank.map((value) => {
                return (
                    <Button button={value.button} id={value.id} key={value.id} playSound={playSound}/>
                )
            })} */}
        </div>
     );
}
 
export default DrumPad;