import React from 'react';
import { Button } from 'react-bootstrap';

const ButtonUp = ({ className, href, type, variant, style, content }) => (
  <Button
    className={className}
    href={href}
    type={type}
    variant={variant}
    style={style}
  >
    {content}
  </Button>
);

export default ButtonUp;
