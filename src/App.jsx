import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./jsx-files/Home";
import Profile from "./jsx-files/Profile";
import Report from "./jsx-files/Report";
import LiveData from "./jsx-files/LiveData";
import Education from "./jsx-files/Education";
import DesktopPage from "./jsx-files/DesktopPage";
import Community from "./jsx-files/Community";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DesktopPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/report" element={<Report />} />
        <Route path="/live-data" element={<LiveData />} />
        <Route path="/education" element={<Education />} />
        <Route path="/community" element={<Community />} />
        <Route path="/dashboard" element={<DesktopPage />} />
      </Routes>
    </Router>
  );
}

export default App;