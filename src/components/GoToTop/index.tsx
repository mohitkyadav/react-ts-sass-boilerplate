import React, {FC, useCallback, useEffect, useState} from 'react';

import './GoToTop.scss';

const GoToTopButton: FC = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleScroll = useCallback(() => {
    if (window.pageYOffset > 100) {
      if (!show) setShow(true);
    } else {
      setShow(false);
    }
  }, [show]);

  const scrollTop = () => {
    window.scrollTo({behavior: 'smooth', top: 0});
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return <>{Boolean(show) && 'Go to top'}</>;
};
export default GoToTopButton;
