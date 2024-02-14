import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Homepage from './Components/Homepage/Homepage';
function App() {

  return (
    <div className='App font-roboto'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/about"  />
          <Route path="/service"  />
          <Route path="/contactus"  />
          <Route path="/teampage"  />
        </Routes>
        <Footer />
      </Router>

    </div>
  )
}

export default App