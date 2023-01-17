
import './App.css';
import Navbar from './Component/Navbar';
import Alert from './Component/Alert';
import Textform from './Component/Textform';
//import About from './Component/About';
import React,{useState} from 'react';


function App() {
  const [mode,setMode]=useState('light');
  const [text,setText]=useState('Enable Darkmode');
  const [alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      setText('Disable Darkmode')
      document.body.style.backgroundColor= '#1a2b44'
      showAlert("Dark mode has been enabled","success")
      setInterval(()=>{
        document.title="Welcome"
      },2000);
      setInterval(()=>{
        document.title="To Myapp"
      },1500);
    }
    else{
      setMode('light')
      setText('Enable Darkmode')
      document.body.style.backgroundColor= 'white';
      showAlert("Light mode has been enabled","success")
    }

  }
  return (
   <>
  <Navbar title="My App" about="About Us" mode={mode} toggleMode={toggleMode} text={text} /> 
  <Alert alert={alert} />
 <div className='container my-2'>
 <Textform  heading="Enter the text" showAlert={showAlert} mode={mode}/>

 </div>
 <div>
  {//<About/>
  }
 </div>
    
 
 
   </>
  );
}

export default App;
