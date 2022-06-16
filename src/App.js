import React from "react"
import "./index.css"
import Menu from "./components/menu";
import Header from "./components/header";
import Paragraph from "./components/paragraph";
import Selected from "./components/selected";
function App() {
  return (
  <div className="main">
    <Menu/>
    <Header/>
    <Paragraph/>
    <Selected/>
  </div>
  );
}

export default App;
