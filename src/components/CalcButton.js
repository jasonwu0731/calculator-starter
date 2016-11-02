import React from 'react';


function showNotImplemented() {
  console.warn('This function is not implemented yet.');
}

const CalcButton = (props) => {
  const { className, children, onClick } = props;
  const extraClass = className || '';
  return (
    <button
      className={`calc-btn ${extraClass}`}
      onClick={ () => onClick(children) }
    >
      {children}
    </button>
  );
};


CalcButton.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
};

CalcButton.defaultProps = {
  onClick: showNotImplemented,
};

export default CalcButton;
