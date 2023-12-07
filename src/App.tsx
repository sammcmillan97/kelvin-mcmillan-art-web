import './App.css'
import Header from "./components/Header/Header";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Router>
      <header>
        <Header />
      </header>
        <div>
          <Routes>
              <Route path="/about" element={<About/>}/>
              <Route path="/home" element={<Home/>}/>
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