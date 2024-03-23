import './App.css'
import Header from "./components/Header/Header";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Originals from './components/Originals/Originals';
import Original from './components/Original/Original';

function App() {
  return (
    <div>
      <Router>
      <header>
        <Header />
      </header>
        <div className="page-content">
          <div className="content">
            <Routes>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/Originals" element={<Originals/>}/>
                <Route path="/Originals/:id" element={<Original/>}/>
                <Route path="/About" element={<About/>}/>   
            </Routes>
          </div>
        </div>
      </Router>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;