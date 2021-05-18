import React from "react";
import styled, { createGlobalStyle } from 'styled-components';

const BlockFooter = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  //background-color: rgb(235, 195, 64);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: var(--tulipTree);
`;

const Footer = () => (
  <BlockFooter className="footer">
    <p>This is some content in sticky footer</p>
  </BlockFooter>
);

export default Footer;