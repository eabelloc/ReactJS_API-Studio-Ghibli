import { useState } from "react";
import "./App.css";
import Films from "./components/Films/Films";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import People from "./components/People/People";

function App() {
  const [showFilms, setShowFilms] = useState(false);
  const [showPeople, setShowPeople] = useState(false);

  return (
    <div className="App">
      <Header setShowFilms={setShowFilms} setShowPeople={setShowPeople} />
      {showFilms ? <Films /> : null}
      {showPeople ? <People /> : null}
      <Footer />
    </div>
  );
}

export default App;
