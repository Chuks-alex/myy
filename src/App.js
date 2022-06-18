import React from "react"
import "./index.css"
import Menu from "./components/menu";
import Header from "./components/header";
import Paragraph from "./components/paragraph";
import Selected from "./components/selected";
import Project1 from "./components/project1";
import Project2 from "./components/project2";
import Project3 from "./components/project3";
import Project4 from "./components/project4";
import Project5 from "./components/project5";
import Project6 from "./components/project6";
import Project7 from "./components/project7";
import Project8 from "./components/project8";
import Project9 from "./components/project9";
import Project10 from "./components/project10";
import Contact from "./components/contact";
import Contactparagraph from "./components/contactparagraph";
import Form from "./components/form";
import Footer from "./components/footer";
function App() {
  return (
  <div className="main">
    <Menu/>
    <Header/>
    <Paragraph/>
    <Selected/>
    <Project1/>
    <Project2/>
    <Project3/>
    <Project4/>
    <Project5/>
    <Project6/>
    <Project7/>
    <Project8/>
    <Project9/>
    <Project10/>
    <Contact/>
    <Contactparagraph/>
    <Form/>
    <Footer/>
  </div>
  );
}

export default App;
