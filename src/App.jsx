import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("")

  useEffect(() => {
    const storageText = localStorage.getItem("text");
    if(storageText){
      setText(storageText);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("text", text);
  };

  return (
    <div>
      <h1>{text || "Sentencja"}</h1>
      <input 
      type="text"
      value={text}
      onChange={(event) => setText(e.target.value)}
      placeholder='Podaj text' /><br/>
      <button onClick={handleSave}>Zapisz</button>

    </div>
  )
}

export default App
