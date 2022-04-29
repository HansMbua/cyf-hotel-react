import React from "react";
import { heading } from "./component/heading";
import Bookings from "./Bookings";
import TouristInfoCards from "./component/TouristInfoCards";
import "./App.css";
import "./card.css";

const App = () => {
  return (
    <div className="App">
      {heading()}

      <TouristInfoCards />
      <Bookings />
    </div>
  );
};

export default App;
