import React from "react";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../src/components/Header";
import Play from "../src/components/Play";
import Game from "../src/components/Game";

 
 const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />} >
      <Route path="play" element={<Play />} />
      <Route path="game/:option" element={<Game />} />
    </Route>
  )
)

function App({routes}) {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
