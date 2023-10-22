import { useState, useEffect } from 'react';

const App = () => {
  const [ value, setValue ] = useState(null);
  const[ message, setMessage ] = useState(null);

  const getMessages = async () => {

    const options = {
      method: "POST",
      body: JSON.stringify({
        message: value
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }

    try{
      const response = await fetch('http://localhost:8000/completions', options);
      const data = await response.json();
      setMessage(data.choices[0].message);
    }catch(error){
      console.error(error);
    }
  }

  return (
    <div className="app">
      <section className="side-bar">
        <button>+ New Chat</button>
        <ul className="history"></ul>
        <nav>
          <p>ChatGPT Bot</p>
        </nav>
      </section>
      <section className="main">
        <h1>ChatGPT</h1>
        <ul className="feed">

        </ul>
        <div className="bottom-section">
          <div className="input-container">
            <input value={value} onChange={(event) => setValue(event.target.value)}></input>
            <div id="submit" onClick={getMessages}>+</div>
          </div>
          <p className="info">
            Chat GPT Mar 14 Version. Free Research Preview.
            Our goal is to make AI systems more natural and safe to interact with.
            Your feedback will help us improve.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
