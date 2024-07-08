import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { WasteDiary } from './pages/WasteDiary/WasteDiary';
import { TheGarden } from './pages/TheGarden/TheGarden';
import { GreenBot } from './pages/GreenBot/GreenBot';
import { WasteWise } from './pages/WasteWise/WasteWise';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/diary" element={<WasteDiary />} />
        <Route path="/garden" element={<TheGarden />} />
        <Route path="/greenbot" element={<GreenBot />} />
        <Route path="/guide" element={<WasteWise />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
