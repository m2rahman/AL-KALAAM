import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Activities from "./pages/Activities";
import Gallery from "./pages/Gallery";
import Projects from "./pages/Projects";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import PrayerTimesPage from "./pages/PrayerTimesPage"; // Public prayer times page
import AdminPrayerTimes from "./pages/AdminPrayerTimes"; // Admin page to set prayer times

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<Contact />} />
            {/* Route for viewing public prayer times */}
            <Route path="/prayer-times" element={<PrayerTimesPage />} />
            {/* Route for admin to set prayer times */}
            <Route path="/admin/prayer-times" element={<AdminPrayerTimes />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
