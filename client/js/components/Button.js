import React from 'react';
import Button from 'react-bootstrap/Button';

const ButtonUp = ({ className, href, type, variant, content }) => (
  <Button className={className} href={href} type={type} variant={variant}>
    {content}
  </Button>
);

export default ButtonUp;
