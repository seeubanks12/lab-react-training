import React from 'react';

const BoxColor = (props) => {
  const customStyle = {
    color: 'white',
    backgroundColor: 'rgb(' + props.r + ',' + props.g + ',' + props.b + ')',
    borderStyle: '1px solid black',
  };
  return (
    <div style={customStyle}>
      r{props.r} g{props.g} b{props.b}
    </div>
  );
};

export default BoxColor;
