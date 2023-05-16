import { useState } from "react";
import Contact from "./components/Contact";
import Delivery from "./components/Delivery";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import { langContext } from "./lib/langContext";
import { bosDb } from "./lib/langData";

function App() {
  
  const [langdb,setLangDb] = useState(bosDb);

  return (
    <div className="App">
      <langContext.Provider value={{langdb,setLangDb}}>
        <Navbar/>
        <Header/>
        <main>
          <Services/>
          <Delivery/>
        </main>
        <Contact/>
      </langContext.Provider>
    </div>
  );
}

export default App;
