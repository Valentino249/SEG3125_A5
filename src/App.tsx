import { useState } from "react";

import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import Body from "./components/Body.tsx";


import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="flex flex-col items-center ">
      <Header onNavigate={setCurrentPage} />
      <Body onNavigate={setCurrentPage}/>

      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;