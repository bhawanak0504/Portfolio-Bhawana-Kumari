import React, { useState } from 'react';

const skillsData = [
  { skill: 'Python' },
  { skill: 'C++' },
  { skill: 'JavaScript' },
  { skill: 'React' },
  { skill: 'AWS' },
  { skill: 'Google Cloud Platform' },
  { skill: 'HTML/CSS' },
  { skill: 'SQL' },
  { skill: 'Git/Github' },
  { skill: 'Linux' },
  { skill: 'Postman for API Testing'},
];

// Define your styles as a JavaScript object
const styles = {
    skillsSection: {
        padding: '40px 20px',
        backgroundColor: '#000000',
        color: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden', // To contain moving elements
    },
    skillsTitle: {
        fontSize: '2.375rem',
        fontWeight: '520',
        color: '#d5d8ea',
        marginBottom: '30px',
        textAlign: 'left',
        marginLeft: '10px',
        textShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
        letterSpacing: '1px',
    },
    skillsList: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '16px',
    },
    skillItem: {
        backgroundColor: '#0e0e10',
        padding: '30px',
        borderRadius: '15px',
        position: 'relative',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        borderLeft: '6px solid #ff7eb9',
        boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.4)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    skillName: {
        fontWeight: 600,
        fontSize: '1.7rem',
        color: '#fff',
        textShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
    },
    // iconContainer: {
    //     position: 'absolute',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     width: '100px',
    //     height: '100px',
    //     borderRadius: '50%',
    //     background: 'linear-gradient(145deg, #cc00ff, #ff65a3, #cc0066, #0000ff, #ff0000)',
    //     color: '#fff',
    //     fontSize: '3rem',
    //     fontWeight: '300',
    //     transition: 'transform 0.3s ease',
    //     boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.3)',
    // },
    icon: {
        fontSize: '3rem',
        textShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
    },
};

const Skills = () => {
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });

  // Event handler to update the position of the circle
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setCirclePosition({
      x: clientX - 50, // Center the circle
      y: clientY - 50, // Center the circle
    });
  };

  return (
    <div style={styles.skillsSection} onMouseMove={handleMouseMove}>
      <h2 style={styles.skillsTitle}>Skills</h2>
      <div style={styles.skillsList}>
        {skillsData.map((item, index) => (
          <div key={index} style={styles.skillItem}>
            <span 
              style={{
                ...styles.iconContainer, 
                transform: `translate(${circlePosition.x}px, ${circlePosition.y}px)`,
              }}
            ></span> {/* Added icon container */}
            <span style={styles.skillName}>{item.skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;