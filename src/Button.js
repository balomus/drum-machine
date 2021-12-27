const Button = (props) => {
    const url = "https://s3.amazonaws.com/freecodecamp/drums/"

    const handleClick = () => {
        console.log("clicked " + props.id);
        document.getElementById(props.id).play();
    }

    return ( 
        <div className="button" onClick={handleClick}>
            {/* {props.id} */}
            {props.button}
            <audio id={props.id} src={`${url}${props.id}.mp3`}></audio>
        </div>
     );
}
 
export default Button;