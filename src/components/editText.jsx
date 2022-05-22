import { useRef } from "react";

const ButtonOnStyle = {
    backgroundColor: "green",
    color: "white",
    padding: "2px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "30px",
    margin: "4px 2px",
    borderRadius: "8px",
    height: "2em",
    width: "5em"
}

const ButtonOffStyle = {
    backgroundColor: "gray",
    color: "white",
    padding: "2px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "30px",
    margin: "4px 2px",
    borderRadius: "8px",
    height: "2em",
    width: "5em"
}


const InputStyle = {
    padding: "5px",
    textAlign: "left",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "15px",
    margin: "4px 2px",
    borderRadius: "8px",
    height: "5em",
    width: "25em",
    border: "1px solid gray"
}

const EditText = (props) => {
    const inputRef = useRef();

    return (<>
        <label htmlFor="promt">
            {props.text}                
        </label> 
        <input 
            id="promt"
            type="textarea" 
            ref={inputRef} 
            maxLength="50"
            style={InputStyle}
        />
        {props.enable ? <button 
            onClick={() => props.onClick(inputRef.current.value)}
            style={ButtonOnStyle}
        > Submit </button> :
        <button style={ButtonOffStyle} > Processing </button>}
    </>)

}

export default EditText;