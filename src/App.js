// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TreatmentsPage from './pages/TreatmentsPage';
import SymptomsPage from './pages/SymptomsPage';
import BlogsPage from './pages/BlogsPage';
import BookAppointment from './pages/BookAppointment';
import ServiceDetails from './pages/ServiceDetails';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/treatments" element={<TreatmentsPage />} />
        <Route path="/symptoms" element={<SymptomsPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/book-appointment" element={<BookAppointment />} />

        <Route path="/services/:slug" element={<ServiceDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
