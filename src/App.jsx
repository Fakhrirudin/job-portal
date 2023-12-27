import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Job from './pages/job';
import Cv from './cv/index';

function App() {
  
  return (
      <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/job" element={<Job />} />
                <Route path="/cv" element={<Cv />} />
            </Routes>
        </Router>
      </div>
    );
}

export default App