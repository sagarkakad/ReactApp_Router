import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Component/Header'
import Home from './Pages/Home';
import About from './Pages/About';
import UserInfo from './Pages/UserInfo';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/userinfo" element={<UserInfo />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all for Not Found */}
      </Routes>
    </BrowserRouter>
  );

}

export default App;
