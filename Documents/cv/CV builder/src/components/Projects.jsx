// src/components/Projects.jsx
import React, { useState } from 'react';
import '../styles/Forms.css'; // We will create this CSS file next

function Projects({ savedData, onSave }) {
  const [isEditing, setIsEditing] = useState(true);
  const [projectItems, setProjectItems] = useState(savedData.length > 0 ? savedData : [{ id: Date.now(), name: '', description: '', link: '' }]);

  const handleChange = (id, e) => {
    const { name, value } = e.target;
    setProjectItems(prevItems =>
      prevItems.map(item => (item.id === id ? { ...item, [name]: value } : item))
    );
  };

  const handleAddItem = () => {
    setProjectItems(prevItems => [
      ...prevItems,
      { id: Date.now(), name: '', description: '', link: '' }
    ]);
  };

  const handleRemoveItem = (id) => {
    setProjectItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(projectItems);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="cv-section">
        <h2>Projects</h2>
        <form onSubmit={handleSubmit}>
          {projectItems.map((item, index) => (
            <div key={item.id} className="form-list-item">
              <h4>Project {index + 1}</h4>
              <div className="form-group">
                <label>Project Name</label>
                <input type="text" name="name" value={item.name} onChange={(e) => handleChange(item.id, e)} />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea name="description" value={item.description} onChange={(e) => handleChange(item.id, e)} rows="4"></textarea>
              </div>
              <div className="form-group">
                <label>Project Link (e.g., GitHub, Live Demo)</label>
                <input type="text" name="link" value={item.link} onChange={(e) => handleChange(item.id, e)} placeholder="https://github.com/your-repo" />
              </div>
              <button type="button" onClick={() => handleRemoveItem(item.id)} className="btn-remove">Remove</button>
            </div>
          ))}
          <button type="button" onClick={handleAddItem} className="btn-add">Add Project</button>
          <div className="form-buttons">
            <button type="submit" className="btn btn-submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="cv-section">
      <h2>Projects</h2>
      {savedData.map(item => (
        <div key={item.id} className="display-list-item">
          <h4>{item.name}</h4>
          <p className="description-text">{item.description}</p>
          {item.link && <a href={item.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>}
        </div>
      ))}
      <div className="form-buttons">
        <button type="button" onClick={() => setIsEditing(true)} className="btn btn-edit">Edit</button>
      </div>
    </div>
  );
}

export default Projects;