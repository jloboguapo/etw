import React from 'react';
import { Badge } from 'react-bootstrap';

const Pill = ({ content }) => (
  <Badge pill variant="info">
    {content}
  </Badge>
);

export default Pill;
