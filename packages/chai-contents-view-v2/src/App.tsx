import React from "react";
import { ExampleButton } from "chai-ui-v2";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ExampleButton child={<div>hello world</div>} />
      </header>
    </div>
  );
}

export default App;
