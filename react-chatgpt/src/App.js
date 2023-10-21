const App = () => {
  return (
    <div className="app">
      <section className="side-bar">
        <button>+ New Chat</button>
        <ul className="history"></ul>
        <nav>
          <p>ChatGPT Bot</p>
        </nav>
      </section>
      <section className="main"></section>
    </div>
  );
}

export default App;
