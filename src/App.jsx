import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState } from "react";

import MyCertificates from "./Components/MyCertificates.jsx";
import Header from './Components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import WhyVoraSkill from './Components/WhyVoraSkill.jsx';
import TrendingSkills from './Components/TrendingSkills.jsx';
import ProgressTracker from './Components/ProgressTracker.jsx';
// import Testimonials from './Components/Testimonials.jsx';
import PricingPlans from './Components/PricingPlans.jsx';
import AuthForm from './Components/AuthForm.jsx';
import Dashboard from './Components/Dashboard.jsx';

import GetStarted from './pages/GetStarted.jsx'; // new page
import Points from "./Components/Points.jsx"; // Points page

function AppContent({ isLoggedIn, setIsLoggedIn }) {
  const location = useLocation();

  // Hide header on /get-started, show on other routes
  const hideHeaderPaths = ["/get-started"];
  const shouldShowHeader = !hideHeaderPaths.includes(location.pathname);

  return (
    <>
      {shouldShowHeader && <Header />}

      <Routes>
        {/* Home route: only accessible if NOT logged in */}
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <>
                <main className="px-4">
                  <section id="hero"><HeroSection /></section>
                  <section id="why" className="mt-16"><WhyVoraSkill /></section>
                  <section id="trending" className="mt-16"><TrendingSkills /></section>

                  {/* Login form placed here with spacing */}
                  <section id="login" className="mt-20 max-w-md mx-auto bg-[#1b1b2f] rounded-3xl p-8 shadow-xl">
                    <AuthForm onLogin={() => setIsLoggedIn(true)} />
                  </section>

                  <section id="progress" className="mt-20"><ProgressTracker /></section>
                  <MyCertificates />
                  {/* <Testimonials /> */}
                  <section id="pricing" className="mt-20"><PricingPlans /></section>
                </main>
              </>
            )
          }
        />

        {/* Dashboard route: only accessible if logged in */}
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              <Dashboard onLogout={() => setIsLoggedIn(false)} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* Get Started page: accessible to anyone */}
        <Route path="/get-started" element={<GetStarted />} />

        {/* Points Page route: only if logged in */}
        <Route
          path="/points"
          element={
            isLoggedIn ? (
              <Points />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
      </Routes>
    </>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <AppContent isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </Router>
  );
}

export default App;
