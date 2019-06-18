import React from 'react';

const FooterMobileWrap = content =>
  window.matchMedia('(max-width: 500px)').matches ? (
    <div className="base-footer-wrap">
      <p>
        <a href="/">Terms of use </a>
      </p>
      <p>
        <a href="/">Privacy policy</a>
      </p>
    </div>
  ) : (
    <>
      <p>
        <a href="/">Terms of use </a>
      </p>
      <p>
        <a href="/">Privacy policy</a>
      </p>
    </>
  );

export default FooterMobileWrap;
