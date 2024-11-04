import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledSkillsSection = styled.section`
  max-width: 800px;
  .inner {
    display: flex;
    flex-direction: column;
    @media (min-width: 700px) {
      min-height: 340px;
    }
  }
`;

const SkillGroup = styled.div`
  margin-top: 20px;

  h3 {
    margin-bottom: 10px;
    font-size: var(--fz-xl);
    font-weight: 700;
    color: var(--light-slate);
  }

  .skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    .skill-item {
      background-color: var(--light-navy);
      border-radius: 5px;
      position: relative;
      color: var(--light-slate);
      text-align: center;
      display: flex;
      flex-direction: column; /* To stack skill name and bar vertically */
      justify-content: space-between;
    }

    /* This div will have padding */
    .skill-name {
      padding: 5px 10px 0px 10px; /* Padding for the skill name only */
      font-family: var(--font-mono);
      font-size: var(--fz-sm);
    }

    /* Container to hold the bar with full width */
    .bar-container {
      width: 100%; /* Full width of the skill item */
      background-color: var(--light-navy); /* Background of the bar */
      height: 2px;
      border-radius: 2px;
      margin-top: 5px;
      position: relative;
    }

    /* The actual progress/usage bar */
    .progress {
      position: absolute;
      height: 100%;
      background-color: var(--green); /* You can change to your desired color */
      border-radius: 2px;
    }
  }
`;

const Skills = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skillData = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'JavaScript', usage: 90 },
        { name: 'Python', usage: 85 },
        { name: 'Java', usage: 70 },
        { name: 'C++', usage: 60 },
        { name: 'C', usage: 50 },
        { name: 'SQL', usage: 75 },
        { name: 'TypeScript', usage: 80 },
      ],
    },
    {
      category: 'Frontend Technologies',
      skills: [
        { name: 'React', usage: 85 },
        { name: 'Material UI', usage: 70 },
        { name: 'Tailwind CSS', usage: 65 },
        { name: 'jQuery', usage: 50 },
        { name: 'Sass', usage: 60 },
        { name: 'Bootstrap', usage: 60 },
        { name: 'HTML', usage: 90 },
        { name: 'CSS', usage: 85 },
      ],
    },
    {
      category: 'Backend Technologies',
      skills: [
        { name: 'Node.js', usage: 80 },
        { name: 'Express.js', usage: 75 },
        { name: 'Socket.io', usage: 65 },
        { name: 'Axios', usage: 60 },
        { name: 'Nodemailer', usage: 55 },
        { name: 'Django', usage: 70 },
        { name: 'Spring Boot', usage: 65 },
      ],
    },
    {
      category: 'Databases/Cloud',
      skills: [
        { name: 'MongoDB', usage: 75 },
        { name: 'MySQL', usage: 80 },
        { name: 'Amazon Web Services (AWS)', usage: 70 },
        { name: 'Google Cloud Platform (GCP)', usage: 60 },
        { name: 'Firebase', usage: 65 },
      ],
    },
    {
      category: 'Development/Visualization Tools',
      skills: [
        { name: 'Visual Studio Code', usage: 90 },
        { name: 'Docker', usage: 65 },
        { name: 'Postman', usage: 85 },
        { name: 'Eclipse', usage: 50 },
        { name: 'Jupyter Notebook', usage: 75 },
        { name: 'Vite', usage: 55 },
        { name: 'Selenium', usage: 60 },
        { name: 'WordPress', usage: 70 },
        { name: 'PowerBI', usage: 65 },
        { name: 'Tableau', usage: 70 },
        { name: 'RStudio', usage: 60 },
      ],
    },
    {
      category: 'Version Control and Management',
      skills: [
        { name: 'Git', usage: 85 },
        { name: 'GitHub', usage: 90 },
        { name: 'AWS CodeCommit', usage: 60 },
        { name: 'Jira', usage: 75 },
        { name: 'Figma', usage: 65 },
        { name: 'Canva', usage: 60 },
        { name: 'Microsoft Office 365', usage: 90 },
        { name: 'Slack', usage: 85 },
      ],
    },
    {
      category: 'Platforms',
      skills: [
        { name: 'macOS', usage: 80 },
        { name: 'Microsoft Windows', usage: 85 },
        { name: 'Linux', usage: 70 },
        { name: 'Unix', usage: 60 },
        { name: 'Ubuntu', usage: 75 },
      ],
    },
  ];

  const renderSkills = () =>
    skillData.map((group, idx) => (
      <SkillGroup key={idx}>
        <br></br>
        <h2>{group.category}</h2>
        <div className="skills-list">
          {group.skills.map((skill, i) => (
            <div key={i} className="skill-item">
              {/* Skill name with padding */}
              <div className="skill-name">{skill.name}</div>
              {/* Progress bar with full width */}
              <div className="bar-container">
                <div className="progress" style={{ width: `${skill.usage}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </SkillGroup>
    ));

  return (
    <StyledSkillsSection id="skills" ref={revealContainer}>
      <h2 className="numbered-heading">Skills</h2>
      <div className="inner">{renderSkills()}</div>
    </StyledSkillsSection>
  );
};

export default Skills;
