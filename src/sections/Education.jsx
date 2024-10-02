import React, { useState } from 'react';

const Education = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const educationData = [
    {
      year: 12,
      percentage: 78.4,
      school: 'St. Anthony Sr. Sec School, Udaipur',
    },
    {
      year: 10,
      percentage: 70.4,
      school: 'Kendriya Vidyalaya Deogarh, Rajasmand',
    },
  ];

  const styles = {
    section: {
      padding: '40px 20px',
      backgroundColor: '#000000', // Darker background for better contrast
      color: '#fff',
    },
    heading: {
      fontSize: '2.375rem',
      fontWeight: '520',
      color: '#d5d8ea',
      marginBottom: '30px',
      textAlign: 'left',
      marginLeft: '10px',
      textShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)', // Subtle text shadow for readability
      letterSpacing: '1px', // Improved typography
    },
    card: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '40px',
      padding: '30px',
      backgroundColor: '#1a1a1a', // Darker card background for better contrast
      borderRadius: '15px',
      position: 'relative',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      borderLeft: '6px solid #00aaff', // Blue left border
      boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.4)', // Soft drop shadow for depth
      transform: 'scale(1)',
      cursor: 'pointer', // Change cursor on hover
    },
    cardHover: {
      boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.6)',
      transform: 'scale(1.05)',
      backgroundColor: 'rgba(255, 255, 255, 0.1)', // Lighter background on hover
    },
    iconContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      background: 'linear-gradient(145deg, #00aaff, #0077cc, #ff0066, #cc33ff)', // Blue gradient
      color: '#fff',
      fontSize: '3rem', // Larger icon size for better visibility
      fontWeight: '300',
      marginRight: '40px',
      flexShrink: 0,
      transition: 'all 0.3s ease',
      boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.3)', // Soft drop shadow for depth
      transform: hoverIndex !== null ? 'translate(10px, -10px)' : 'translate(0, 0)', // Move on hover
    },
    icon: {
      fontSize: '3rem', // Increase the year number size for better visibility
      textShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)', // Subtle text shadow for readability
    },
    details: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    school: {
      fontSize: '1.7rem', // Bigger and bolder school name
      fontWeight: '600',
      color: '#fff',
      marginBottom: '10px',
      textShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)', // Subtle text shadow for readability
    },
    percentage: {
      fontSize: '1.5rem',
      color: '#bbb',
      marginTop: '5px',
      opacity: 0.8, // Slightly faded percentage text
    },
  };

  return (
    <section style={styles.section} id="education">
      <div className="w-full text-white">
        <p style={styles.heading}>My Education</p>
        <div className="education-container">
          <div className="education-content">
            {educationData.map((edu, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                style={{
                  ...styles.card,
                  ...(hoverIndex === index ? styles.cardHover : {}),
                }}
              >
                <div className="flex flex-col h-full justify-start items-center py-2">
                  <div className="education-card_logo">
                    <div style={styles.iconContainer}>
                      <span style={styles.icon}>{edu.year}</span>
                    </div>
                  </div>

                  <div className="education-content_bar" />
                </div>

                <div className="sm:p-5 px-2.5 py-5">
                  <p style={styles.school}>{edu.school}</p>
                  <p style={styles.percentage}>
                    Percentage: {edu.percentage}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;