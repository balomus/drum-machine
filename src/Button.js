const Button = (props) => {
    const url = "https://s3.amazonaws.com/freecodecamp/drums/"

    const handleClick = () => {
        props.playSound(document.getElementById(props.id));
    }

    return ( 
        <div className="button" onClick={handleClick}>
            {props.button}
            <audio id={props.id} src={`${url}${props.id}.mp3`}></audio>
        </div>
     );
}
 
export default Button;