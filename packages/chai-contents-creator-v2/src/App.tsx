import React from "react";
import { ExampleButton } from "chai-ui-v2";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ExampleButton child={<div>차이홍 콘텐트 저작도구</div>} />
      </header>
    </div>
  );
}

export default App;
