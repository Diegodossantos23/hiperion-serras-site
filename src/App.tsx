import "./App.scss";
import Header from "./components/AppBar/Header";
import Footer from "./components/Footer/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton/WhatsAppButton";

import Routing from "./routes/Routing";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routing />
      <Footer/>
      <WhatsAppButton/>
    </div>
  );
}

export default App;
