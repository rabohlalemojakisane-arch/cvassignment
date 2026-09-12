import './App.css';
import { useState, useEffect, useRef } from 'react';
import cvData from './cvData';
import Header from './components/Header';
import Profile from './components/Profile';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import References from './components/References';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showSkills, setShowSkills] = useState(true);
  const cvRef = useRef();

  useEffect(() => {
    document.title = `CV - ${cvData.personal.name}`;
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSkills = () => {
    setShowSkills(!showSkills);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const element = cvRef.current;
    const opt = {
      margin: 0.5,
      filename: `${cvData.personal.name.replace(/\s+/g, '_')}_CV.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    window.html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="page-wrapper">
      <div className="action-buttons">
        <button onClick={toggleDarkMode} className="action-btn">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <button onClick={handlePrint} className="action-btn">
          Print CV
        </button>
        <button onClick={handleDownload} className="action-btn">
          Download CV
        </button>
      </div>

      <div className={`cv-container ${darkMode ? 'dark-mode' : ''}`} ref={cvRef}>
        <Header 
          name={cvData.personal.name} 
          title={cvData.personal.title} 
          contact={cvData.contact}
        />
        
        <Profile 
          name={cvData.personal.name} 
          title={cvData.personal.title} 
          summary={cvData.personal.summary} 
        />
        
        <Education educationList={cvData.education} />
        
        <section>
          <div className="section-header">
            <h2>Skills</h2>
            <button onClick={toggleSkills} className="small-btn">
              {showSkills ? 'Hide Skills' : 'Show Skills'}
            </button>
          </div>
          {showSkills && <Skills skills={cvData.skills} />}
        </section>
        
        <Experience experience={cvData.experience} />
        <Projects projects={cvData.projects} />
        <References references={cvData.references} />
        <Footer name={cvData.personal.name} email={cvData.contact.email} />
      </div>
    </div>
  );
}

export default App;
