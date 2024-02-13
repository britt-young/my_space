import "./App.css";
import Navigation from "./Components/Navbar";
import Header from "./Components/Header";
import { Outlet } from 'react-router-dom';
import Footer from "./Components/Footer";


function App() {
   return (
    <>
      <Navigation />
      <Header />
      {/* Displays content defined by URL route  */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
