// App.js
import React from 'react';
import Navbar from './components/navbar';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/skill'; // ✅ Add this import

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <Projects />
        <Skills />     {/* ✅ Add Skills section */}
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Irish Prajapati. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;