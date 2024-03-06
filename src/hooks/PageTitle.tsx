import React, { useEffect } from 'react';
type Props = {
    title: string
}

function PageTitle({ title }: Props) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return null;}

export default PageTitle;
