import React from "react";
// const useStore = await import("app1/store");

const App = ({ count = 0 }) => {
  return (
    <div>
      <h1>App 2</h1>
      <p>Shared data: {count}</p>
    </div>
  );
};

export default App;
