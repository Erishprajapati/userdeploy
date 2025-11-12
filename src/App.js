// App.js
import React from 'react';
import Navbar from './components/navbar';
import Header from './components/Header';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <p>CC BY-NC-SA 4.0</p>
          <p>{new Date().getFullYear()}-PRESENT © Irish Prajapati</p>
        </div>
      </footer>
    </>
  );
}

export default App;