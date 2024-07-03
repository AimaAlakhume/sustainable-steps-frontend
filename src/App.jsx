import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import { WasteDiary } from './pages/WasteDiary/WasteDiary';
import { TheGarden } from './pages/TheGarden/TheGarden';
import { GreenBot } from './pages/GreenBot/GreenBot';
import { WasteWise } from './pages/WasteWise/WasteWise';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/diary" element={<WasteDiary />} />
        <Route path="/garden" element={<TheGarden />} />
        <Route path="/greenbot" element={<GreenBot />} />
        <Route path="/guide" element={<WasteWise />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
