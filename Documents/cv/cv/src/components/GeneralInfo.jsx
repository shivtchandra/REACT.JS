import React, { useState } from 'react';
import '../styles/Forms.css'; // Import our new styles

function GeneralInfo({ savedData, onSave }) {
  const [isEditing, setIsEditing] = useState(true);
  const [formData, setFormData] = useState(savedData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  // If we are editing, show the form.
  if (isEditing) {
    return (
      <div className="cv-section">
        <h2>General Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
          </div>
          <div className="form-buttons">
            <button type="submit" className="btn btn-submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }

  // Otherwise, show the submitted information.
  return (
    <div className="cv-section">
      <h2>General Information</h2>
      <div className="display-info">
        <p><strong>Name:</strong> {savedData.name}</p>
        <p><strong>Email:</strong> {savedData.email}</p>
        <p><strong>Phone:</strong> {savedData.phone}</p>
      </div>
      <div className="form-buttons">
        <button type="button" onClick={handleEdit} className="btn btn-edit">Edit</button>
      </div>
    </div>
  );
}

export default GeneralInfo;
