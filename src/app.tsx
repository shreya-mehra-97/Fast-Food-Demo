import React from "react";
import Navigation from "./navigation";
import Services from "./Services";
import Menu from "./Menu";
import MenuItems from "./MenuItem";
import Slider from "./Slider";
import Footer from "./Footer"

function App() {
  return (
    <div className="App">
      <Navigation />
      <Services />
      <Menu />
      <MenuItems />
      <Slider/>
      <Footer/>
    </div>
  );
}

export default App;