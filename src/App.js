import "./App.css";
import About from "./components/About";
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from "./components/TextForm";
import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [btnText, setBtnText] = useState("Light Mode");

  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      setBtnText("Dark Mode");
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode on", "info");
      // document.title = "TextUtils - Dark mode";
      // setInterval(() => {
      //   document.title = "Dark mode is Amazing Mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500);
    }
    else{
      setMode('light')
      setBtnText("Light Mode");
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode on", "info");
      // document.title = "TextUtils - Light mode";
    }
  }
  return (
    
    <Router>
    <Navbar title="TextUtils" about="About" mode = {mode} toggleMode={toggleMode} btnText={btnText}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
          <Route path="/" element={<TextForm heading=" Try TextUtils - Word Counter, Character Counter , Remove Extra Spaces" mode = {mode} showAlert = {showAlert} />}/>
          <Route path="/about" element={<About mode={mode}/>}/>
    </Routes>
    </div>
    </Router>
    
  );
}
export default App;