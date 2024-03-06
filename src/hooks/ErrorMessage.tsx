import { useState } from 'react';

const useErrorMessage = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const showError = (message: string) => {
    setErrorMessage(message);
  };

  const clearError = () => {
    setErrorMessage('');
  };

  return [errorMessage, showError, clearError];
};

export default useErrorMessage;
