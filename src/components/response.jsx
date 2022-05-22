import {FaArrowLeft, FaArrowRight} from  'react-icons/fa';

const AnswerStyle = {
    fontFamily: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New',monospace",
}

const QuestionStyle = {
    color:"brown",
    fontFamily: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New',monospace",
}

const QAStyle = {
    textAlign: "left",
    justifyContent: 'space-between',
    fontFamily: "Brush Script MT, cursive",
    color: "#61dafb",

}

const HeadStyle = {
    display: "flex",
    flexDirection: "col",
    flexWrap: "wrap",
    justifyContent: "space-between",
    borderBottom: "1px solid #009879",
}

const MainStyle = {
    width: "20em",
    heigth: "50em",
    borderRadius: "8px",
    fontFamily: "sans-serif",
    margin: "20px",
    padding: "20px",
}



const ButtonOnStyle = {
    backgroundColor: "transparent",
    outline: "none",
    border: "none",
    fontSize: "40px",
    color: "white"
}


const ButtonOffStyle = {
    backgroundColor: "transparent",
    outline: "none",
    border: "none",
    fontSize: "40px",
    color: "darkgray"

}

const HighLight = {
    backgroundColor: "#282c40",
    width: "20em",
    heigth: "50em",
    borderRadius: "8px",
    borderBottom: "1px solid #009879",
    padding: "20px"

}
const Response = (props) => {
    const dataSize = props.data.length;
    if (dataSize === 0 || dataSize < props.pos) return
    
    const data = props.data[props.pos];
    const hasLeft = props.pos > 0;
    const hasRight = dataSize -1 > props.pos;
    
   return (
    <div style={MainStyle}>
        <div style={HeadStyle}>
                <button 
                    style={ hasLeft? ButtonOnStyle: ButtonOffStyle}
                    onClick={() =>  props.onClick( props.pos - hasLeft? 1: 0)}
                > <FaArrowLeft /> </button>    
                <h3 style={QAStyle}>  Response from {data.AI}</h3>
                <button 
                    style={ hasRight? ButtonOnStyle: ButtonOffStyle}   
                    onClick={() =>  props.onClick( props.pos + hasRight? 1: 0)}
                > <FaArrowRight /> </button>    
        </div>
        <table style={HighLight}>
            <thead >
                <tr>
                    <th style={QAStyle}> Q: </th>
                    <td style={QuestionStyle}>{data.Q}</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th style={QAStyle}>A: </th>
                    <td style={AnswerStyle}>{data.A}</td>
                </tr>
            </tbody>
        </table>
    </div>
   ) 
}
export default Response;