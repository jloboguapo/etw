import React, { useEffect, useState } from 'react';

const FooterMobileWrap = () => {
  const [mobileWrap, setMobileWrap] = useState(
    !window.matchMedia('(max-width: 500px)').matches
  );

  useEffect(() => {
    const resizeEvent = () =>
      setMobileWrap(!window.matchMedia('(max-width: 500px)').matches);
    window.addEventListener('resize', resizeEvent);

    return () => {
      window.removeEventListener('resize', resizeEvent);
    };
  }, []);

  return mobileWrap ? (
    <>
      <p>
        <a href="/">Terms of use </a>
      </p>
      <p>
        <a href="/">Privacy policy</a>
      </p>
    </>
  ) : (
    <div className="base-footer-wrap">
      <p>
        <a href="/">Terms of use </a>
      </p>
      <p>
        <a href="/">Privacy policy</a>
      </p>
    </div>
  );
};

export default FooterMobileWrap;
