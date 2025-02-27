import React, { useState } from 'react';
import { saveAs } from 'file-saver'; // Ensure this is installed: npm install file-saver

const Resume = () => {
  const [hover, setHover] = useState(false);

  const handleDownload = () => {
    const resumePath = 'public/MyResume.pdf'; // Path to the resume file in your public folder
    saveAs(resumePath, 'Bhawana_Kumari_resume.pdf'); // Name of the file after download
  };

  const styles = {
    containerBox: {
      maxWidth: '700px', // Slightly wider for a bolder presence
      margin: '60px auto', // More vertical spacing
      padding: '40px', // Extra padding for a spacious feel
      borderRadius: '20px', // Softer, modern rounded corners
      background: 'linear-gradient(135deg, #1a1a1a, #2c2c2c)', // Dark gradient background
      boxShadow: '0 8px 40px rgba(0, 0, 0, 0.5)', // Deep, dramatic shadow
      border: '1px solid rgba(255, 255, 255, 0.1)', // Subtle white border
      transition: 'all 0.4s ease-in-out', // Smoother transition
      position: 'relative', // For potential pseudo-elements or effects
      overflow: 'hidden', // Clean edges with gradient
    },
    containerBoxHover: {
      transform: 'translateY(-10px) scale(1.03)', // Lift and slight zoom on hover
      boxShadow: '0 15px 50px rgba(0, 0, 0, 0.7)', // More pronounced shadow
    },
    heading: {
      fontSize: '3rem', // Bigger, bolder heading
      fontWeight: '800', // Extra bold
      color: '#ffffff', // White for contrast
      marginBottom: '25px',
      textAlign: 'center',
      textTransform: 'uppercase', // Modern touch
      letterSpacing: '2px', // Spacing for a cool effect
      background: 'linear-gradient(to right, #ff007a, #00d4ff)', // Gradient text
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    section: {
      marginBottom: '30px',
    },
    subHeading: {
      color: '#ff007a', // Vibrant pink for flair
      fontSize: '1.8rem', // Slightly larger
      fontWeight: '600',
      marginBottom: '15px',
      textAlign: 'center',
      letterSpacing: '1px',
    },
    paragraph: {
      fontSize: '1.1rem', // Slightly bigger for readability
      color: '#d1d1d1', // Light gray for a modern look
      opacity: 0.85, // Subtle fade
      textAlign: 'center',
      lineHeight: '1.6', // Better spacing
    },
    btn: {
      display: 'block',
      background: 'linear-gradient(45deg, #ff007a, #00d4ff)', // Cool gradient button
      color: '#ffffff',
      padding: '15px 35px', // Larger button
      fontSize: '1.2rem',
      fontWeight: '600',
      border: 'none',
      borderRadius: '50px', // Pill-shaped button
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 5px 15px rgba(255, 0, 122, 0.5)', // Glow effect
      margin: '0 auto',
      position: 'relative',
      overflow: 'hidden',
    },
    btnHover: {
      background: 'linear-gradient(45deg, #00d4ff, #ff007a)', // Reverse gradient on hover
      transform: 'translateY(-4px)', // Lift effect
      boxShadow: '0 10px 25px rgba(0, 212, 255, 0.7)', // Stronger glow
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
      <h2 style={styles.heading}>Resume Vault</h2>

      {/* Resume Download Section */}
      <div style={styles.section}>
        <h3 style={styles.subHeading}>Grab My Resume</h3>
        <p style={styles.paragraph}>
          Hit the button below to snag my latest resume—ready for the future!
        </p>
        <button
          style={styles.btn}
          onMouseEnter={(e) => {
            e.target.style.background = styles.btnHover.background;
            e.target.style.transform = styles.btnHover.transform;
            e.target.style.boxShadow = styles.btnHover.boxShadow;
          }}
          onMouseLeave={(e) => {
            e.target.style.background = styles.btn.background;
            e.target.style.transform = 'none';
            e.target.style.boxShadow = styles.btn.boxShadow;
          }}
          onClick={handleDownload}
        >
          Download Now
        </button>
      </div>
    </div>
  );
};

export default Resume;