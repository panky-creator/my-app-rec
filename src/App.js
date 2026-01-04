// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import Alert from './components/Alert';
// import About from './components/About';
import React, {useState} from 'react'
// import{
//   BrowserRouter as Router,
//   Switch,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message, 
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="grey";
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("light mode has been enabled", "success")
    }
    
  }
  return (
   <>
    {/* // <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container my-3">
        {/* <Routes> */}
          {/* <Route path="/about" element={<About />} />

          <Route */}
            {/* path="/" element= */}
              <TextFrom showAlert={showAlert} title="Enter your text" mode={mode} />
            {/* // } */}
          {/* // /> */}
        {/* </Routes> */}
      </div>
    {/* // </Router> */}
    </>
  );
}

export default App;
