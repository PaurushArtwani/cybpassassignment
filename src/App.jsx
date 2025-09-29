import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import Onboarding from './pages/Onboarding';

function App() {
  return (
    <div className="app d-flex">
      <Sidebar />
      <div className="main flex-grow-1 d-flex flex-column">
        <Header />
        <div className="flex-grow-1 d-flex align-items-center justify-content-center">
          <Onboarding />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
