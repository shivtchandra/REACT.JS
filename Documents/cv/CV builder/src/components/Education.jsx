import React, { useState } from 'react';
import '../styles/Forms.css';

function Education({ savedData, onSave }) {
  const [isEditing, setIsEditing] = useState(true);
  const [educationItems, setEducationItems] = useState(savedData.length > 0 ? savedData : [{ id: Date.now(), school: '', title: '', date: '' }]);

  const handleChange = (id, e) => {
    const { name, value } = e.target;
    setEducationItems(prevItems =>
      prevItems.map(item => (item.id === id ? { ...item, [name]: value } : item))
    );
  };

  const handleAddItem = () => {
    setEducationItems(prevItems => [
      ...prevItems,
      { id: Date.now(), school: '', title: '', date: '' }
    ]);
  };

  const handleRemoveItem = (id) => {
    setEducationItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(educationItems);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="cv-section">
        <h2>Education</h2>
        <form onSubmit={handleSubmit}>
          {educationItems.map((item, index) => (
            <div key={item.id} className="form-list-item">
              <h4>Entry {index + 1}</h4>
              <div className="form-group">
                <label>School Name</label>
                <input type="text" name="school" value={item.school} onChange={(e) => handleChange(item.id, e)} />
              </div>
              <div className="form-group">
                <label>Title of Study</label>
                <input type="text" name="title" value={item.title} onChange={(e) => handleChange(item.id, e)} />
              </div>
              <div className="form-group">
                <label>Date of Study</label>
                <input type="text" name="date" value={item.date} onChange={(e) => handleChange(item.id, e)} />
              </div>
              <button type="button" onClick={() => handleRemoveItem(item.id)} className="btn-remove">Remove</button>
            </div>
          ))}
          <button type="button" onClick={handleAddItem} className="btn-add">Add Education</button>
          <div className="form-buttons">
            <button type="submit" className="btn btn-submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="cv-section">
      <h2>Education</h2>
      {savedData.map(item => (
        <div key={item.id} className="display-list-item">
          <h4>{item.school}</h4>
          <p>{item.title}</p>
          <p><em>{item.date}</em></p>
        </div>
      ))}
      <div className="form-buttons">
        <button type="button" onClick={() => setIsEditing(true)} className="btn btn-edit">Edit</button>
      </div>
    </div>
  );
}

export default Education;
