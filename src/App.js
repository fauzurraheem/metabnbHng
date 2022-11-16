import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Place from './pages/Place';
import Footer from './conponents/Footer';
import Navbar from './conponents/Navbar';
import 'antd/dist/antd.min.css';

function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/place' element={<Place />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
