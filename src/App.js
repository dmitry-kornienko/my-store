import './style/App.css'
import { Route, Routes } from "react-router-dom";
import Navigation from './components/Navigation';
import RemainderPage from './pages/RemainderPage';
import BuyPage from './pages/BuyPage';
import PackedPage from './pages/PackedPage';
import SentPage from './pages/SentPage';
import FinancePage from './pages/FinancePage';
import './style/App.css';

function App() {
  return (
    <div className="App">
        <Navigation />
          <Routes>
            <Route path='/' element={ <RemainderPage /> } />
            <Route path='/buy' element={ <BuyPage /> } />
            <Route path='/packed' element={ <PackedPage /> } />
            <Route path='/sent' element={ <SentPage /> } />
            <Route path='/finance' element={ <FinancePage /> } />
          </Routes>
      </div>
  );
}

export default App;
