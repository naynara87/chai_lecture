import React from "react";
import { ExampleButton } from "chai-ui-v2";

const Home = () => {
  return (
    <div>
      <h1>저작도구 Home</h1>
      <ExampleButton child={<div>버튼</div>} />
    </div>
  );
};

export default Home;
