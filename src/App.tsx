import './App.css'
import Header from "./components/Header/Header";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Originals from './components/Originals/Originals';

function App() {
  return (
    <div>
      <Router>
      <header>
        <Header />
      </header>
        <div className="pageContent">
          <Routes>
              <Route path="/home" element={<Home/>}/>
              <Route path="/originals" element={<Originals/>}/>
              <Route path="/about" element={<About/>}/>
          </Routes>
        </div>
      </Router>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;