import React from 'react';
import PropTypes from 'prop-types';

const baseStyles = {
  fontFamily: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontWeight: 700,

  border: 0,
  borderRadius: '3em',
  cursor: 'pointer',
  display: 'inline-block',
  lineHeight: 1,
};

const modeStyles = {
  primary: {
    color: 'white',
    backgroundColor: '#1EA7FD',
  },
  secondary: {
    color: '#333',
    backgroundColor: 'transparent',
    boxShadow: 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset',
  },
};

const sizeStyles = {
  small: {
    fontSize: '12px',
    padding: '10px 16px',
  },
  medium: {
    fontSize: '14px',
    padding: '11px 20px',
  },
  large: {
    fontSize: '16px',
    padding: '12px 24px',
  },
};

export const Button = ({ primary, backgroundColor, size, label, ...props }) => (
  <button
    style={{
      ...baseStyles,
      ...modeStyles[primary ? 'primary' : 'secondary'],
      ...sizeStyles[size],
      ...(backgroundColor && { backgroundColor }),
    }}
    {...props}
  >
    {label}
  </button>
);

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(sizeStyles)),
  label: PropTypes.string.isRequired,
};

Button.defaultProps = {
  primary: false,
  size: 'medium',
};
