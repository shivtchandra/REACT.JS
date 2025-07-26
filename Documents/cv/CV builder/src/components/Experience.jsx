// src/components/Experience.jsx
import React, { useState } from 'react';
import '../styles/Forms.css'; // We will create this CSS file next

function Experience({ savedData, onSave }) {
  const [isEditing, setIsEditing] = useState(true);
  const [experienceItems, setExperienceItems] = useState(savedData.length > 0 ? savedData : [{ id: Date.now(), company: '', position: '', responsibilities: '', dateRange: '' }]);

  const handleChange = (id, e) => {
    const { name, value } = e.target;
    setExperienceItems(prevItems =>
      prevItems.map(item => (item.id === id ? { ...item, [name]: value } : item))
    );
  };

  const handleAddItem = () => {
    setExperienceItems(prevItems => [
      ...prevItems,
      { id: Date.now(), company: '', position: '', responsibilities: '', dateRange: '' }
    ]);
  };

  const handleRemoveItem = (id) => {
    setExperienceItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(experienceItems);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="cv-section">
        <h2>Practical Experience</h2>
        <form onSubmit={handleSubmit}>
          {experienceItems.map((item, index) => (
            <div key={item.id} className="form-list-item">
              <h4>Entry {index + 1}</h4>
              <div className="form-group">
                <label>Company Name</label>
                <input type="text" name="company" value={item.company} onChange={(e) => handleChange(item.id, e)} />
              </div>
              <div className="form-group">
                <label>Position Title</label>
                <input type="text" name="position" value={item.position} onChange={(e) => handleChange(item.id, e)} />
              </div>
              <div className="form-group">
                <label>Main Responsibilities</label>
                <textarea name="responsibilities" value={item.responsibilities} onChange={(e) => handleChange(item.id, e)} rows="4"></textarea>
              </div>
              <div className="form-group">
                <label>Date Range (e.g., Jan 2022 - Present)</label>
                <input type="text" name="dateRange" value={item.dateRange} onChange={(e) => handleChange(item.id, e)} />
              </div>
              <button type="button" onClick={() => handleRemoveItem(item.id)} className="btn-remove">Remove</button>
            </div>
          ))}
          <button type="button" onClick={handleAddItem} className="btn-add">Add Experience</button>
          <div className="form-buttons">
            <button type="submit" className="btn btn-submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="cv-section">
      <h2>Practical Experience</h2>
      {savedData.map(item => (
        <div key={item.id} className="display-list-item">
          <h4>{item.company}</h4>
          <p><strong>{item.position}</strong> ({item.dateRange})</p>
          <p className="responsibilities-text">{item.responsibilities}</p>
        </div>
      ))}
      <div className="form-buttons">
        <button type="button" onClick={() => setIsEditing(true)} className="btn btn-edit">Edit</button>
      </div>
    </div>
  );
}

export default Experience;