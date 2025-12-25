import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Challenges from './pages/Challenges';
import ChallengeDetail from './pages/ChallengeDetail';
import MissionControl from './pages/MissionControl';
import Scoreboard from './pages/Scoreboard';
import Profile from './pages/Profile';
import About from './pages/About';
import AdminPanel from './pages/AdminPanel';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/challenge/:id" element={<ChallengeDetail />} />
            <Route path="/mission-control" element={<MissionControl />} />
            <Route path="/scoreboard" element={<Scoreboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            {/* Secret admin route - access via /admin/interstellar-command */}
            <Route path="/admin/interstellar-command" element={<AdminPanel />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
