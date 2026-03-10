import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import ImageGallery from "./pages/Imagegallery"; // Make sure the capitalization matches your file!

import HerbalPage from "./pages/HerbalPage";
import AgriculturalPage from "./pages/AgriculturalPage";
import OrganicPage from "./pages/OrganicPage";

// 1. This tiny component watches the URL and scrolls to the top whenever it changes!
// 1. We added 'hash' to useLocation
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // 2. Only scroll to the top if there is NO #hash in the URL
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function MainLandingPage() {
  return (
    <>
      <Home />
      <About />
      <Products />
      <ImageGallery />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      {/* 2. We place it right inside the Router so it works globally */}
      <ScrollToTop />
      
      <div className="bg-white text-gray-800 font-sans">
        <Navbar />
        <div className="pt-20"> 
          <Routes>
            <Route path="/" element={<MainLandingPage />} />
            <Route path="/herbal-products" element={<HerbalPage />} />
            <Route path="/agricultural-products" element={<AgriculturalPage />} />
            <Route path="/organic-fertilizers" element={<OrganicPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;