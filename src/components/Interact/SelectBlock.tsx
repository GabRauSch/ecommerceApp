//  Pix and card ==> receive the options and creates a list, only one can be chosen
import React, { ReactNode } from 'react';
type Props = {
    children: ReactNode
}


const SelectBlock = ({children}: Props) => {
  return (
    <div className="choice-area">
        {children}
    </div>
  );
};

export default SelectBlock;
