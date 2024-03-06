import { useState } from 'react';
import { useCookies } from 'react-cookie';

const useCookie = (cookieName: string) => {
  const [cookies, setCookie, removeCookie] = useCookies([cookieName]);
  const [cookieValue, setCookieValue] = useState(cookies[cookieName] || '');

  const set = (value: any) => {
    setCookie(cookieName, value);
    setCookieValue(value);
  };

  const remove = () => {
    removeCookie(cookieName);
    setCookieValue('');
  };

  return [cookieValue, set, remove];
};

export default useCookie;
