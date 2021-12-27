import { useState } from "react";
import Button from "./Button";

const DrumPad = () => {
    const [bankOne, setBankOne] = useState([
        {
            id: 'Heater-1',
            button: 'Q'

        },
        {
            id: 'Heater-2',
            button: 'W'
        },
        {
            id: 'Heater-3',
            button: 'E'
        },
        {
            id: 'Heater-4_1',
            button: 'A'
        },
        {
            id: 'Heater-6',
            button: 'S'
        },
        {
            id: 'Dsc_Oh',
            button: 'D'
        },
        {
            id: 'Kick_n_Hat',
            button: 'Z'
        },
        {
            id: 'RP4_KICK_1',
            button: 'X'
        },
        {
            id: 'Cev_H2',
            button: 'C'
        }
    ]);

    const playAudio = () => {
        console.log('Audio played');
    }

    return ( 
        <div id="drum-pad">

            {bankOne.map((value) => {
                return (
                    <Button button={value.button} id={value.id} key={value.id}/>
                )
            })}
        </div>
     );
}
 
export default DrumPad;

{/* <audio src={`https://s3.amazonaws.com/freecodecamp/drums/${object.id}.mp3`} key={object.id}>Q</audio> */}