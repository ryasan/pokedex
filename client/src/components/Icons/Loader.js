import React from 'react';

const LoaderSVG = ({
  style = { margin: '30% auto', width: '100%' },
  width = '100%',
  viewBox = '0 0 24 30',
  fill = '',
  className = '',
  onClick = () => {}
}) => (
  <svg
    style={style}
    width={width}
    height={width}
    fill={fill}
    viewBox={viewBox}
    onClick={onClick}
    className={className}
    x="0px"
    y="0px"
    xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="13" width="4" height="5">
      <animate
        attributeName="height"
        attributeType="XML"
        values="5;21;5"
        begin="0s"
        dur="0.6s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y"
        attributeType="XML"
        values="13; 5; 13"
        begin="0s"
        dur="0.6s"
        repeatCount="indefinite"
      />
    </rect>
    <rect x="10" y="13" width="4" height="5">
      <animate
        attributeName="height"
        attributeType="XML"
        values="5;21;5"
        begin="0.15s"
        dur="0.6s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y"
        attributeType="XML"
        values="13; 5; 13"
        begin="0.15s"
        dur="0.6s"
        repeatCount="indefinite"
      />
    </rect>
    <rect x="20" y="13" width="4" height="5">
      <animate
        attributeName="height"
        attributeType="XML"
        values="5;21;5"
        begin="0.3s"
        dur="0.6s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y"
        attributeType="XML"
        values="13; 5; 13"
        begin="0.3s"
        dur="0.6s"
        repeatCount="indefinite"
      />
    </rect>
  </svg>
);

export default LoaderSVG;
