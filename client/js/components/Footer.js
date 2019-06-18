import React from 'react';
import Subscribe from './Subscribe';
import FooterMobileWrap from './FooterMobileWrap';

const Footer = () => {
  return (
    <div className="etw-footer-main-container">
      <div className="etw-footer-row">
        <div className="etw-footer-top-container">
          <div className="etw-company-description-container">
            <img
              className="etw-logo-dark-on-transparent"
              src="./resources/etw-logo-dark-on-transparent.svg"
            />
            <p>
              Execute to Win (ETW) is the Intentional Leadership Platform that
              high-performance organizations trust to strengthen culture and
              accelerate growth.<a href="/"> Learn more about us.</a>
            </p>
          </div>
          <div className="etw-footer-input-container">
            <p>Get leadership resources in your inbox</p>
            <Subscribe />
          </div>
        </div>
      </div>
      <div className="etw-footer-links-container">
        <div className="footer-link-wraps">
          <div className="etw-footer-columns">
            <h4>Company</h4>
            <p>Learn more about ETW and our intentional culture.</p>
            <h5>Company</h5>
            <a href="/">About ETW</a>
            <a href="/">Our story</a>
            <a href="/">How we give back</a>
            <a href="/">Careers</a>
            <a href="/">Partners</a>
            <a href="/">Contact us</a>
            <h5>Contact us</h5>
            <p>
              480.638.9300
              <br />
              25 South Arizona Place
              <br />
              Suite 510
              <br />
              Chandler, AZ 85225
            </p>
          </div>
          <div className="etw-footer-columns">
            <h4>Solutions</h4>
            <p>Face your enterprise-level challenges head-on.</p>
            <h5>By outcome</h5>
            <a href="/">Strengthen Culture</a>
            <a href="/">Accelerate Growth</a>
            <h5>By solution</h5>
            <a href="/">Leadership development</a>
            <a href="/">Goal definition and reporting</a>
            <a href="/">Behavior and process design</a>
            <a href="/">Performance delivery</a>
            <h5>Dig Deeper</h5>
            <a href="/">Why ETW</a>
            <a href="/">Clients</a>
            <a href="/">Pricing</a>
          </div>
        </div>{' '}
        <div className="footer-link-wraps footer-link-wrap-2">
          <div className="etw-footer-columns">
            <h4>Resources</h4>
            <p>Get equipped for intentional culture-building.</p>
            <h5>Support</h5>
            <a href="/">Frequently asked questions</a>
            <a href="/">Support Center</a>
            <a href="/">Developer docs</a>
            <h5>Leadership resources</h5>
            <a href="/">Articles</a>
            <a href="/">Assessments</a>
            <a href="/">Case Studies</a>
            <a href="/">Checklists</a>
            <a href="/">Fact sheets</a>
            <a href="/">White papers</a>
          </div>
          <div className="etw-footer-columns">
            <h4>Features</h4>
            <p>Explore the ETW platform and its enterprise functionality.</p>
            <h5>Leadership development software</h5>
            <a href="/">Drive product tour</a>
            <a href="/">Talent gap reports</a>
            <a href="/">Development paths</a>
            <a href="/">Competencty reviews</a>
            <h5>Priority execution software</h5>
            <a href="/">Align product tour</a>
            <a href="/">Goal management</a>
            <a href="/">Plan management</a>
            <a href="/">Progress Dashboards</a>
            <h5>Take action</h5>
            <a href="/">Request a demo</a>
          </div>
        </div>
      </div>
      <div className="etw-footer-baseline-container">
        <div className="etw-footer-baseline-proprietary">
          <p className="etw-copywright">
            ©2019{' '}
            <span className="etw-footer-rights">All rights reserved, </span>
            Execute to Win, Inc
          </p>
          <FooterMobileWrap />
          <p className="etw-global-privacy">
            <a className="footer-global-privacy" href="/">
              Global privacy compliance
            </a>
          </p>
        </div>
        <div className="etw-footer-baseline-social">
          <a href="/">
            <img
              className="social-media-icons"
              src="./resources/facebook.svg"
            />
          </a>
          <a href="/">
            <img
              className="social-media-icons"
              src="./resources/linkedin.svg"
            />
          </a>
          <a href="/">
            <img className="social-media-icons" src="./resources/twitter.svg" />
          </a>
          <a href="/">
            <img
              className="social-media-icons"
              src="./resources/instagram.svg"
            />
          </a>
          <a href="/">
            <img className="social-media-icons" src="./resources/medium.svg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
