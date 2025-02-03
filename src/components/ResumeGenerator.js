import React, { useState } from 'react';
import axios from 'axios';

const ResumeGenerator = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [summary, setSummary] = useState('');
  const [resume, setResume] = useState('');

  const generateResume = async () => {
    try {
      const response = await axios.post('/api/generate-resume', { name, email, phone, summary });
      setResume(response.data.resume);
    } catch (error) {
      console.error('Error generating resume:', error);
    }
  };

  return (
    <div>
      <h2>Resume Generator</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <textarea placeholder="Summary" value={summary} onChange={(e) => setSummary(e.target.value)} />
      <button onClick={generateResume}>Generate Resume</button>
      {resume && <pre>{resume}</pre>}
    </div>
  );
};

export default ResumeGenerator;
