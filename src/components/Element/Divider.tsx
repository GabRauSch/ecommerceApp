import React from 'react';

type Props = {
  text: string
}

const Divider = ({text}: Props) => {
  return (
    <div className="container section-division">
        <div className="section-division-title">{text}</div>
        <div className="section-division-line"></div>
    </div>
  );
};

export default Divider;
