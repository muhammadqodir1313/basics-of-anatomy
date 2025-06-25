import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SystemsPage from './pages/SystemsPage';
import SystemDetail from './pages/SystemDetail';
import QuizPage from './pages/QuizPage';
import ResourcesPage from './pages/ResourcesPage';
import AboutPage from './pages/AboutPage';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/systems" element={<SystemsPage />} />
            <Route path="/systems/:systemId" element={<SystemDetail />} />
            <Route path="/quizzes" element={<QuizPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Router;