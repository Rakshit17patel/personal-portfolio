import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email, socialMedia } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }

  .contact-info {
    margin-top: 30px;
    font-size: var(--fz-lg);
    text-align: left;
    line-height: 1.5;
    color: var(--light-slate);

    ul {
      list-style: none;
      padding: 0;

      li {
        margin-bottom: 10px;
      }
    }
  }

  .connect-message {
    margin-top: 40px;
    font-size: var(--fz-lg);
    color: var(--light-slate);
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">What’s Next?</h2>

      <h2 className="title">Let's Connect!</h2>
      <p className="connect-message">
        Feel free to drop a message—whether it's for a chat, a question, or an exciting opportunity.
        I'd love to hear from you and explore how we can collaborate!
      </p>
      <div className="contact-info">
        <ul>
          <li>
            <strong>Location:</strong> Long Beach, CA, USA
          </li>
          <li>
            <strong>Timezone:</strong> Pacific Standard Time (PST)
          </li>
          <li>
            <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
          </li>
          <li>
            <strong>LinkedIn:</strong>{' '}
            <a
              href={socialMedia.find(media => media.name === 'Linkedin').url}
              target="_blank"
              rel="noopener noreferrer">
              {socialMedia.find(media => media.name === 'Linkedin').url}{' '}
            </a>
          </li>
        </ul>
      </div>

      <a className="email-link" href={`mailto:${email}`}>
        Say Hello
      </a>
    </StyledContactSection>
  );
};

export default Contact;
