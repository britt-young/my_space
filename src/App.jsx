import { useState } from "react";
import "./App.css";
import Navigation from "./Components/Navbar";
import Header from "./Components/Header";
import { Outlet } from 'react-router-dom';
import Footer from "./Components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navigation />
      <Header />
      {/* Displays content defined by URL route  */}
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
