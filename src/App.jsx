import React from "react";
import Background from "./Components/Background";
import Foreground from "./Components/Foreground";
import Stagger from "./Components/Stagger";

const App = () => {
  return (
    <div className="w-full h-screen bg-zinc-800 relative">
      <Background />
      <Foreground /> 
      {/* <Stagger/> */}
      
    </div>
  );
};

export default App;
