const Button = (props) => {
    
    const handleClick = () => {
        props.playSound(document.getElementById(props.id));
    };

    // const handleKeyPress = (e) => {
    //     console.log('key press handled ' + e.key);
    //     props.playSound(document.getElementById(props.id));
    // };

    return ( 
        // <div className="button" onClick={handleClick} onKeyDown={handleKeyPress} tabIndex="0">
        <div className="button" onClick={handleClick}>
            
            {props.button}<br></br>
            {props.id}
            <audio id={props.id} src={`${props.url}`}></audio>
        </div>
     );
}
 
export default Button;