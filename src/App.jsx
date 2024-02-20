import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
// import Footer from './Components/Footer/Footer';
import Homepage from './Components/Homepage/Homepage';
import { SidebarProvider } from './Components/Homepage/SidebarContext';
import DepositMoney from './Components/SeparatePages/DepositMoney';
import Bonus from './Components/SeparatePages/Bonus';
import Affiliate from './Components/SeparatePages/Affiliate';
function App() {

  return (
    <SidebarProvider>
    <div className='App font-roboto'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/homepage" element={<Homepage/>} />
          <Route path="/DepositMoney" element={<DepositMoney/>} />
          <Route path="/Bonus" element={<Bonus/>} />
          <Route path="/Affiliate" element={<Affiliate/>} />
        </Routes>
      </Router>
    </div>
    </SidebarProvider>
  )
}

export default App
