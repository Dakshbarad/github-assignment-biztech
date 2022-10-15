import React from "react";
import { UserSearchBox, UserDisplayBox } from "./components";

const App = () => {
  return (
    <div className="App h-screen grid grid-rows-[repeat(12,_minmax(0,_1fr))]">
      <UserSearchBox />
      <UserDisplayBox />
    </div>
  );
};

export default App;
