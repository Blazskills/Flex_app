
import "./App.css";
import { Features } from "./components/features/Features";
import { Footer } from "./components/footer/Footer";
import { GetStarted } from "./components/getstarted/GetStarted";
import { HeaderNav } from "./components/header/HeaderNav";
import { ItWorks } from "./components/itworks/ItWorks";
import { Numbers } from "./components/number/Numbers";
import { Pricing } from "./components/pricing/Pricing";

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <HeaderNav/>
      <Numbers/>
      <Features/>
      <Pricing/>
      <GetStarted/>
      <ItWorks/>
      <Footer/>
    </div>
  );
}

export default App;
