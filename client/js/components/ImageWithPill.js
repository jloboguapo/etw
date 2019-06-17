import React from 'react';
import PropTypes from 'prop-types';
import CategoryPill from './CategoryPill';

const ImageWithPills = ({ imageClass }) => (
  <div className={`insights-images ${imageClass}`}>
    <CategoryPill />
  </div>
);

ImageWithPills.propTypes = {
  imageClass: PropTypes.string.isRequired
};

export default ImageWithPills;
