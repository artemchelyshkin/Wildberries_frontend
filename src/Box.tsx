import React from 'react';
import './Box.css';

interface BoxProps {
  width: string;
  height: string;
  color: string;
}

const Box: React.FC<BoxProps> = ({ width, height, color }) => {
  return (
    <div className="box" style={{ width, height, backgroundColor: color }}></div>
  );
};

export default Box;
