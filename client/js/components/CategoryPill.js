import React from 'react';
import PropTypes from 'prop-types';

const CategoryPill = props => {
  const { width, height, textPosition } = props;

  return (
    <svg
      width={`${width}px`}
      height={`${height}px`}
      viewBox="0 0 128 56"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <rect id="path-1" x="0" y="0" width="98" height="26" rx="13" />
        <filter
          x="-24.0%"
          y="-82.7%"
          width="148.0%"
          height="280.8%"
          filterUnits="objectBoundingBox"
          id="filter-2"
        >
          <feOffset
            dx="0"
            dy="2"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            stdDeviation="7.5"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0"
            type="matrix"
            in="shadowBlurOuter1"
          />
        </filter>
      </defs>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="01a_homepage" transform="translate(-156.000000, -2709.000000)">
          <g id="Group-11" transform="translate(151.000000, 2424.000000)">
            <g id="Group-6" transform="translate(20.000000, 298.000000)">
              <g id="Group-7">
                <g id="Rectangle" fillRule="nonzero">
                  <use
                    fill="black"
                    fillOpacity="1"
                    filter="url(#filter-2)"
                    xlinkHref="#path-1"
                  />
                  <use fill="#41BDAC" xlinkHref="#path-1" />
                </g>
                <text
                  id="Category"
                  fontFamily="Helvetica"
                  fontSize="13"
                  fontWeight="normal"
                  letterSpacing="0.5"
                  fill="#FFFFFF"
                >
                  <tspan x="12" y={textPosition}>
                    CATEGORY
                  </tspan>
                </text>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

CategoryPill.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  textPosition: PropTypes.number
};

CategoryPill.defaultProps = {
  width: 128,
  height: 56,
  textPosition: 16
};

export default CategoryPill;
