import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import Nav from "./components/Nav/Nav";
import Episode from "./components/Pages/Episode";
import Location from "./components/Pages/Location";
import Character from "./components/Pages/Character";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardDetail from "./components/Cards/CardDetail";

// This is the main function component
const App = () => {
  return (
    <Router>
      <Nav />

      <Routes>
        
        <Route path="/rick-morty-wiki" element={<Character />}></Route>
        
        <Route path="/rick-morty-wiki" element={<Character />}></Route>
        <Route path="/:id" element={<CardDetail />}></Route>
        
        <Route path="/rick-morty-wiki/episode" element={<Episode />}></Route>
        <Route path="/rick-morty-wiki/episode/:id" element={<CardDetail />}></Route>

        <Route path="/rick-morty-wiki/location" element={<Location />}></Route>
        <Route path="/rick-morty-wiki/location/:id" element={<CardDetail />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
