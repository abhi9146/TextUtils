import Navbar from './components/navbar';
// import About from './components/About';
import TextArea from './components/textArea';
import Alert from './components/Alert';
import React,{useState} from 'react';

import './App.css';

function App() {
  const [mode , setMode] = useState('light');

  
  const toggle = () => {
       if(mode=='light'){
        setMode('dark');
       }
       else{
        setMode('light');
       }
  }
  return (
    <>
    <Navbar mode={mode} toggle={toggle}/>
    <Alert />
    <TextArea />
    {/* <About /> */}
    </>
  );
}

export default App;
 