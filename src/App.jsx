import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Play from "../src/components/Play";
import Game from "../src/components/Game";


const App = () => (
  <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Play/>}/>
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  </>
)

export default App;
