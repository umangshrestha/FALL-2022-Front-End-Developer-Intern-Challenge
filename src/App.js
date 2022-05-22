import './App.css';
import EditText from './components/editText';
import SelectAI from './components/selectAi';
import Response from './components/response';
import AI_LIST from './settings/ai'
import React, { useEffect, useState } from 'react';
import { FaCog } from 'react-icons/fa';


const Headers =  {
  "Content-Type": "application/json",
  "Authorization": `Bearer ${process.env.REACT_APP_OPENAI_SECRET}`,
}

const SettingStyle = {
  backgroundColor: "transparent",
  color: "white",
  fontSize: "30px",
  margin: "4px 2px",
  borderRadius: "20px",
}

function App() {

  const [isPromt, setIsPromt] = useState(true);
  const [history, setHistory] = useState([]);
  const [pos, setPos] = useState(0);
  const [ai, SetAI] = useState(0);
  const [isRequest, setIsRequest] = useState(false);

  useEffect(() => {document.title= "AI CHAT BOX"}, [])
  const handleOnClick = (prompt) => {
    if (isRequest|| prompt.length===0) return 

    setIsRequest(true);
    const Body = {
      prompt: prompt,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0
    };
    const AI =   AI_LIST[ai].path;
    const Url = `https://api.openai.com/v1/engines/${AI}/completions`; 
    fetch(Url, {
        method: "POST",
        headers: Headers,
        body: JSON.stringify(Body)})
      .then(resp => resp.json())
      .then(resp => {console.log(resp) ;addTextToHistory(prompt,resp.choices[0].text)})
      .catch(resp => addTextToHistory(prompt, resp.message))
    
    setIsRequest(false);
    
  }

  const addTextToHistory = (prompt, Response) => {
    let _history = [...history];
    _history.unshift({Q: prompt, A: Response, AI: AI_LIST[ai].name});
    setHistory(_history);
    setPos(0);
  }



  return (
      <div className="App">
        <h1>AI Chat Box 
          <button 
            style={SettingStyle}
            onClick={(_=> setIsPromt(!isPromt))}
          > <FaCog /></button>
        </h1>
        {
          isPromt?
            <>
              <EditText text="Enter Promt:" onClick={handleOnClick} enable={!isRequest}/>
              <Response data={history} pos={pos} onClick={setPos}/>
            </>:
            <SelectAI  pos={ai} onClick={SetAI}/>
        }
      </div>
  );
}

export default App;
