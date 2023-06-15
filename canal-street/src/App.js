import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Main-Navigation/navbar';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}></Route>
      </Routes>
    </Router>
  );
}
