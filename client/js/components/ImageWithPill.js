import React from 'react';
import PropTypes from 'prop-types';
import CategoryPill from './CategoryPill';

const ImageWithPill = ({ imageClass }) => (
  <div className={`images ${imageClass}`}>
    <CategoryPill content="category" />
  </div>
);

ImageWithPill.propTypes = {
  imageClass: PropTypes.string.isRequired
};

export default ImageWithPill;
