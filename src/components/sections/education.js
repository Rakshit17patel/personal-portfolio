import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledJobsSection = styled.section`
  max-width: 700px;
  .inner {
    display: flex;
    flex-direction: column;
    @media (min-width: 700px) {
      min-height: 340px;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;

  button {
    padding: 10px 20px;
    border: none;
    background-color: var(--lightest-navy);
    color: var(--green);
    font-family: var(--font-mono);
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: var(--green);
      color: var(--light-navy);
    }

    &:focus {
      outline: none;
      border: 2px solid var(--green);
    }

    &.active {
      background-color: var(--green);
      color: var(--light-navy);
    }
  }
`;

const SectionContainer = styled.div`
  margin-top: 20px;

  ul {
    ${({ theme }) => theme.mixins.fancyList};
  }

  h3 {
    margin-bottom: 2px;
    font-size: var(--fz-xxl);
    font-weight: 800;
    line-height: 1.3;
    .company {
      color: var(--green);
    }
  }

  .range {
    margin-bottom: 25px;
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }
`;

const EducationSection = styled.div`
  margin-bottom: 20px;

  .education-details {
    font-size: var(--fz-lg);
    margin-bottom: 5px;

    .course {
      margin-top: 5px;
      font-size: var(--fz-md);
      color: var(--slate);
    }

    .gpa {
      font-size: var(--fz-xl); /* Increase the font size here */
      color: var(--green);
    }

    .coursework {
      font-size: var(--fz-xl); /* Increase the font size here */
      margin-top: 10px;
      color: var(--light-slate);
    }
  }
`;

const CertificationsSection = styled.div`
  margin-bottom: 20px;

  a {
    font-size: var(--fz-xl); /* Increase the font size here */
    color: var(--green);
    text-decoration: none; /* Optional: remove underline */

    &:hover {
      text-decoration: underline; /* Optional: underline on hover */
    }
  }
`;

const Education = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [activeSection, setActiveSection] = useState('education');

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const certificationsData = [
    'React Native - The Practical Guide: <a href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-b2b99499-5699-4354-86c3-117d943d3367.pdf" target="_blank" rel="noopener noreferrer">Certificate Link</a>',
    'The Complete Node.js Developer Course: <a href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-e64a1647-ddbc-469a-972e-e39dd60b8fa5.pdf" target="_blank" rel="noopener noreferrer">Certificate Link</a>',
    'IBM Data Science: <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/C5XE8TE4RHW9" target="_blank" rel="noopener noreferrer">Certificate Link</a>',
    'Python Basics: <a href="https://example.com/python-certificate" target="_blank" rel="noopener noreferrer">Certificate Link</a>',
  ];

  const volunteerData = [
    // Pramukh Sevak - Mobile Application Developer
    'Developed a mobile app using React Native and Firebase to streamline management processes for BAPS Swaminarayan Chhatralay.',
    'Collaborated with a team of four developers, coordinating tasks and ensuring seamless integration of frontend and backend services.',

    // Marketing Head - International Society of Automation (ISA)
    'Managed social media campaigns, increasing engagement by 4x through innovative series like quizzes and "Did You Know" segments.',
    'Organized workshops and coding events, fostering a collaborative learning environment and mentoring new students through one-on-one sessions.',
    'Led the coordination of tech events, overseeing logistics and volunteers, enhancing student participation in tech workshops and webinars.',
    'Established a peer mentoring program that connected senior students with juniors, providing guidance on projects and academic work.',
  ];

  const achievementsData = [
    'Awarded certificate of merits for accomplishing 1st Institute Rank in the 5th Semester and 2nd Institute Rank in the 2nd Semester at Charotar University of Science and Technology',
    'Secured Funding for a student-led tech workshop series through a successful grant proposal, facilitating the learning of new technologies and skills among peers',
    'Received the Dean’s Recognition Award for exceptional contributions to the IEEE Student Branch, including successful tech seminars and workshops that fostered technical skill development',
    'Awarded Best Project at Charusat University’s annual tech fair for developing an innovative campus event management system, enhancing event organization and student participation',
  ];

  const renderEducation = () => (
    <EducationSection>
      <h3>
        <strong>California State University Long Beach </strong> | Long Beach, CA <br /> Aug 2023 –
        Present*
      </h3>
      <div className="education-details">
        <p className="coursework">
          <strong>Course</strong>:{' '}
          <span className="gpa">Master of Science in Computer Science</span>
        </p>
        <p className="coursework">
          <strong>GPA</strong>: <span className="gpa">3.85/4.0</span>
        </p>
        <p className="coursework">
          <strong>Coursework</strong>: Advanced Topics in Programming Languages, Advanced Analysis
          of Algorithms, Advanced Software Engineering, Advanced Artificial Intelligence, Pattern
          Recognition, Computer organization & Architecture, Data Visualization,Software Testing &
          Verification
        </p>
      </div>
      <br />

      <h3>
        <strong>Gujarat Technological University</strong> | Ahmedabad, India
        <br /> Aug 2018 – May 2022
      </h3>
      <div className="education-details">
        <p className="coursework">
          <strong>Course</strong>:{' '}
          <span className="gpa">Bachelor of Engineering in Computer Engineering</span>
        </p>
        <p className="coursework">
          <strong>GPA</strong>: <span className="gpa">3.69/4.0</span>
        </p>
        <p className="coursework">
          <strong>Coursework</strong>: Advanced Topics in Programming Languages, Advanced Analysis
          of Algorithms, Advanced Software Engineering, Advanced Artificial Intelligence, Pattern
          Recognition, Object Oriented Analysis & Design, Data Visualization, Information Security,
          Advanced Computer Architecture
        </p>
      </div>
      <br />
    </EducationSection>
  );

  const renderBulletPoints = data => (
    <CertificationsSection>
      <ul>
        {data.map((item, idx) => (
          <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </ul>
    </CertificationsSection>
  );
  const sectionContent = () => {
    switch (activeSection) {
      case 'education':
        return renderEducation();
      case 'certifications':
        return renderBulletPoints(certificationsData);
      case 'volunteering':
        return renderBulletPoints(volunteerData);
      case 'achievements':
        return renderBulletPoints(achievementsData);
      default:
        return null;
    }
  };

  return (
    <StyledJobsSection id="education" ref={revealContainer}>
      <h2 className="numbered-heading">Academic Background</h2>

      <div className="inner">
        <ButtonGroup>
          <button
            className={activeSection === 'education' ? 'active' : ''}
            onMouseEnter={() => setActiveSection('education')}>
            Education
          </button>
          <button
            className={activeSection === 'certifications' ? 'active' : ''}
            onMouseEnter={() => setActiveSection('certifications')}>
            Certifications
          </button>
          <button
            className={activeSection === 'volunteering' ? 'active' : ''}
            onMouseEnter={() => setActiveSection('volunteering')}>
            Volunteering
          </button>
          <button
            className={activeSection === 'achievements' ? 'active' : ''}
            onMouseEnter={() => setActiveSection('achievements')}>
            Achievements
          </button>
        </ButtonGroup>

        <SectionContainer>{sectionContent()}</SectionContainer>
      </div>
    </StyledJobsSection>
  );
};

export default Education;
