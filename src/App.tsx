import './App.css'
import Header from "./Header";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from './About';
import Footer from './Footer';

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <Router>
        <div>
          <Routes>
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