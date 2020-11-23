import React from 'react';
import NumberFormat from 'react-number-format';

interface ValueProps {
  value: number;
}

function Value({ value }: ValueProps) {
  return (
    <NumberFormat
      style={{ fontWeight: 'bold' }}
      thousandSeparator
      displayType='text'
      value={value}
    />
  );
}

export default Value;
