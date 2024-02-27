import React from 'react';
import styles from '../styles/Button/Standard.module.css'

type Props = {
  text: string,
  color?: string
}

const Standard = ({text, color}: Props) => {
  return (
    <div className={styles.buttonSourceNow} style={{backgroundColor: (color ? color : '')}}>{text}</div>
  );
};

export default Standard;