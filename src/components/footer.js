import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

const StyledCredit = styled.div`
  color: var(--light-slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: 1;

  a {
    padding: 10px;
    color: inherit; /* Ensures the link inherits color */
    text-decoration: none; /* Remove underline */
  }
`;

const Footer = () => (
  <StyledFooter>
    <StyledCredit tabIndex="-1">
      <a href="https://github.com/Rakshit17patel" target="_blank" rel="noopener noreferrer">
        <span>Designed &amp; Built by Rakshit Patel</span>
      </a>
    </StyledCredit>
  </StyledFooter>
);

export default Footer;
