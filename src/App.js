import React, {useReducer} from "react";
import Navbar from "./Components/Navbar";
import TableHead from "./Components/Table";
import DRRContext from "./Context/DRRContext";
import DRRReducer from "./Context/reducer"
import TableBody from "./Components/TableBody";

function App() { 
  const[drr, dispatch] = useReducer(DRRReducer, [])
  return (
    <>
    <DRRContext.Provider value={{drr, dispatch}}>
      <Navbar/>
      <TableHead/>
      <TableBody/>
    </DRRContext.Provider>
    
    </>
  );
}

export default App;
