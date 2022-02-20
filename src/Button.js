const Button = (props) => {
    
    const handleClick = () => {
        props.playSound(document.getElementById(props.id));
    };

    return ( 
        <div className="button" onClick={handleClick}>
            {props.button}
            <audio id={props.id} src={`${props.url}`}></audio>
        </div>
     );
}
 
export default Button;