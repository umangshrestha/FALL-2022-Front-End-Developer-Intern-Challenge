import AI_LIST from "../settings/ai";


const SelectStyle = {
    backgroundColor: "green",
    color: "white",
    padding: "5px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "14px",
    margin: "4px 2px",
    borderRadius: "8px",
    height: "3em",
    width: "10em"
}

const PStyle = {
    padding: "5px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    margin: "4px 2px",
    borderRadius: "8px",
    height: "5.5em",
    width: "25em",
    border: "1px solid gray",
    backgroundColor: "#282c40",
    color: "white",
    fontFamily: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New',monospace",
}

const HStyle = {
    color: "#61dafb",
    padding: "5px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    margin: "4px 2px",
    borderRadius: "8px",
    border: "1px solid gray",
    backgroundColor: "#282c40",

}

const SelectAI = (props) =>  {
    const process = ({target: {value}}) => {
        props.onClick(value)
    }
    return (<>
        <label htmlFor="ai"> Current AI:</label>
        <h3 id="ai" style={HStyle}>{AI_LIST[props.pos].name}</h3>
        <label htmlFor="selectAI"> Description:</label>
        <p style={PStyle}>{AI_LIST[props.pos].description}</p>

        <select style={SelectStyle} onChange={process} id="SelectAI" >
            <option  selected_value=""> Select New AI</option>
            {AI_LIST.map((val, pos) => 
                <option key={pos} value={pos} >{val.name}</option>)}
        </select>
    </>)
}


export default SelectAI;


