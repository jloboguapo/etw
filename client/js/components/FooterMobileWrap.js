import React, { useEffect, useState } from 'react';

const FooterMobileWrap = () => {
  const [mobileWrap, setMobileWrap] = useState(
    !window.matchMedia('(max-width: 500px)').matches
  );

  useEffect(() => {
    window.addEventListener('resize', () => {
      setMobileWrap(!window.matchMedia('(max-width: 500px)').matches);
    });
    window.removeEventListener('resize', () => {
      setMobileWrap(!window.matchMedia('(max-width: 500px)').matches);
    });
  });

  console.log(mobileWrap);
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
