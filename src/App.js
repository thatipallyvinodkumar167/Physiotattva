import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

// Import components / pages
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TreatmentsPage from './pages/TreatmentsPage';
import SymptomsPage from './pages/SymptomsPage';
import BlogsPage from './pages/BlogsPage';

function App() {
    return (
        <Router>
            <Navbar />

            <Routes>
                {/* Home Page */}
                <Route path="/" element={<Home />} />

                {/* Services Page */}
                <Route path="/services" element={<ServicesPage />} />

                {/* About Page */}
                <Route path="/about" element={<AboutPage />} />

                {/* Contact Page */}
                <Route path="/contact" element={<ContactPage />} />

                {/* Treatments Page */}
                <Route path="/treatments" element={<TreatmentsPage />} />

                {/* Symptoms Page */}
                <Route path="/symptoms" element={<SymptomsPage />} />

                {/* Blogs Page */}
                <Route path="/blogs" element={<BlogsPage />} />
            </Routes>

            <Footer />
        </Router>
    );
}

export default App;
