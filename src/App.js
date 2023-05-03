import Contact from "./components/Contact";
import Delivery from "./components/Delivery";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Services/>
      <Delivery/>
      <Contact/>
    </div>
  );
}

export default App;
