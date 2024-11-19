import React, { useState } from 'react';
import { saveAs } from 'file-saver'; // Ensure this is installed: npm install file-saver

const Resume = () => {
  const [hover, setHover] = useState(false);

  const handleDownload = () => {
    const resumePath = 'public/MY Resume.pdf'; // Path to the resume file in your public folder
    saveAs(resumePath, 'Bhawana_Kumari_Resume.pdf'); // Name of the file after download
  };

  const styles = {
    containerBox: {
      maxWidth: '600px', // Maximum width for the box
      margin: '50px auto', // Center the box on the page
      padding: '30px', // Padding inside the box
      borderRadius: '15px', // Rounded corners for the box
      backgroundColor: '000000', // Light background for the box
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // Soft shadow for the box
      border: '1px solid #ffffff', // Light gray border for the box
      transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition effects
    },
    containerBoxHover: {
      transform: 'scale(1.02)', // Slight scaling on hover
      boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)', // Deeper shadow on hover
    },
    heading: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#343a40', // Darker text color
      marginBottom: '20px',
      textAlign: 'center', // Center the heading
    },
    section: {
      marginBottom: '20px',
    },
    subHeading: {
      color: '#007bff', // Blue color for the subheading
      fontSize: '1.6rem',
      marginBottom: '10px',
      textAlign: 'center', // Center sub-heading
    },
    paragraph: {
      fontSize: '1rem',
      color: '#495057', // Dark gray color for the paragraph
      opacity: 0.9, // Slightly faded text
      textAlign: 'center', // Center the paragraph
    },
    btn: {
      display: 'block', // Display as a block to center the button
      backgroundColor: '#28a745', // Green background for the button
      color: '#ffffff',
      padding: '12px 25px',
      fontSize: '1.1rem',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease, transform 0.3s ease',
      boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.2)', // Soft drop shadow for the button
      margin: '0 auto', // Center the button horizontally
    },
    btnHover: {
      backgroundColor: '#218838', // Darker green on hover
      transform: 'translateY(-2px)', // Slight lift on hover
    },
  };

  return (
    <div
      style={{
        ...styles.containerBox,
        ...(hover ? styles.containerBoxHover : {}),
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h2 style={styles.heading}>Resume Section</h2>

      {/* Resume Download Section */}
      <div style={styles.section}>
        <h3 style={styles.subHeading}>Download My Resume</h3>
        <p style={styles.paragraph}>Click the button below to download my resume:</p>
        <button
          style={styles.btn}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = styles.btnHover.backgroundColor;
            e.target.style.transform = styles.btnHover.transform;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = styles.btn.backgroundColor;
            e.target.style.transform = 'none'; // Reset transform
          }}
          onClick={handleDownload}
        >
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default Resume;
