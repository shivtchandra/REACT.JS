import React, { useState } from 'react';
import './App.css'; 
import GeneralInfo from './components/GeneralInfo.jsx';
import Education from './components/Education';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';

function App() {
  // State for the entire CV's data will live here
  const [generalInfo, setGeneralInfo] = useState({
    name: 'Shiva',
    email: 'vetakaram@gmail.com',
    phone: '9090902245'
  });

  
  const [educationHistory, setEducationHistory] = useState([
    {id: 1, school: 'State University', title: 'B.Sc. Computer Science', date: '2018-2022'}
  ]);
  // const [experienceHistory, setExperienceHistory] = useState([]);

  const [experienceHistory, setExperienceHistory] = useState([
    {id: 1, company: 'Tech Solutions Inc.', position: 'Software Engineer', responsibilities: 'Developed and maintained web applications using React and Node.js.', dateRange: '2022 - Present'}
  ]);

  const [projectsHistory, setProjectsHistory] = useState([
    {id: 1, name: 'CV Builder', description: 'A web application to create and edit resumes, built with React.', link: 'https://github.com/your-name/cv-builder'}
  ]);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>CV Builder</h1>
        <p>Create your professional resume</p>
      </header>
      <main className="cv-content">
         <GeneralInfo savedData={generalInfo} onSave={setGeneralInfo} />
  <Education savedData={educationHistory} onSave={setEducationHistory} />
 <Experience savedData={experienceHistory} onSave={setExperienceHistory} />
 <Projects savedData={projectsHistory} onSave={setProjectsHistory} />
    </main>
      <footer className="app-footer">
        <p>Built with React</p>
      </footer>
    </div>
  );
}

export default App;
