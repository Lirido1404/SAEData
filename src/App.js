import { useState } from "react";
import { Modal } from "./Components/Modal";
import Mainlayout2 from "./Components/Mainlayout2";


function App() {


  const [mode,setMode] = useState("light");


  const handleMode = ()=>{
    setMode(mode === "light" ? "dark" : "light");
    console.log(mode);
  }

  const [isOpen, setIsOpen] = useState(false);
	const openModal = ()=>{
		setIsOpen(!isOpen);
	}
  return (
    <div className="App" id={mode}>
      <div className="bodyperso">
     <Mainlayout2 isOpen={isOpen} setIsOpen={setIsOpen} openModal={openModal} handleMode ={handleMode} setMode={setMode} mode={mode}/>
     <Modal isOpen={isOpen} setIsOpen={setIsOpen} openModal={openModal} handleMode ={handleMode} setMode={setMode} mode={mode}/>
      </div>
    </div>
  );
}

export default App;
