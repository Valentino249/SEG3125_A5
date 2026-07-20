
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import Body from "./components/Body.tsx";


import "./App.css";

function App() {

  return (
    <div className="flex flex-col items-center ">
      <Header />
      <Body/>

      <Footer  />
    </div>
  );
}

export default App;