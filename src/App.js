import "./App.css";
import React from "react";

function App() {
  const fileImporter = React.useRef(null);
  const [errorMesage, setErroMessage] = React.useState(null);
  const [canMoveNext, setCanMoveNext] = React.useState(false);
  function importFiles() {
    fileImporter.current.click();
  }
  function fileUpload() {
    if (fileImporter.current.files.length !== 2) {
      setErroMessage("You can only upload two files");
      setCanMoveNext(false);
    } else {
      setErroMessage(null);
      setCanMoveNext(true);
    }
  }
  return (
    <div className="App">
      <p>Welcome to DuelClip!</p>
      <button
        onClick={importFiles}
        style={{
          backgroundColor: "#6fa2f2",
          margin: 10,
          padding: 10,
          borderRadius: 5,
          borderStyle: "hidden",
        }}
      >
        Import Files
      </button>
      <p>{errorMesage}</p>
      <input
        ref={fileImporter}
        onInput={fileUpload}
        type="file"
        style={{ display: "none" }}
        multiple
        accept="video/*"
      ></input>
      <button
        style={{
          backgroundColor: canMoveNext ? "#6fa2f2" : "#8fb8f7",
          margin: 10,
          padding: 10,
          borderRadius: 5,
          borderStyle: "hidden",
        }}
        disabled={!canMoveNext}
      >
        Next
      </button>
    </div>
  );
}

export default App;
