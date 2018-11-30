import React from 'react';
import footergraphic from '../footergraphic.svg';

const FooterGraphic = () => {
  return (
    <img
      alt="footerGraphics"
      style={{ position: 'absolute', bottom: '0' }}
      src={footergraphic}
    />
  );
};

export default FooterGraphic;
