import React from "react";
import { ChaiSkeleton } from "chai-ui";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>chai-content-creator</h1>
        <ChaiSkeleton width={100} height={100} />
      </header>
    </div>
  );
}

export default App;
