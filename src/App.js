import './App.css';
import Header from './header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home'
import NewsPost from './newspost';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news/:slug" element={<NewsPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
