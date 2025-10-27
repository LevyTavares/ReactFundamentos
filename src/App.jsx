import TextInput from "./components/TextInput"


function App() {
  return (
    <div className="App">
      <h1 className="App-title">Text Input Component</h1>
      <TextInput placeholder={"O que você ta fazendo FDP🖕🏻"} maxLength={125} />
      <div className="appContainer">
        <TextInput placeholder={"Outro input"} maxLength={125} />
      </div>
    </div>
  )
}

export default App
