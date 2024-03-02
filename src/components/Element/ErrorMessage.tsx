
import React, { useState } from 'react';

type Props = {
    message: string,
    clearError: ()=>void
}

const ErrorMessage = ({message, clearError}: Props) => {
    
    return (
        <div style={{
            position: 'fixed',
            top: '10px',
            left: 'calc(50% - 150px)',
            width: '300px',
            padding: '10px',
            backgroundColor: 'rgba(210, 0, 0, 0.5)',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '5px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            zIndex: '9999',
            cursor: 'pointer'
        }} onClick={clearError}>
            {message}
        </div>
    );
};

export default ErrorMessage;
