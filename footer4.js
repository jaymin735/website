import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './footer4.css'

const Footer4 = (props) => {
  return (
    <footer className="footer4-thq-footer7-elm thq-section-padding">
      <div className="footer4-thq-max-width-elm thq-section-max-width">
        <div className="footer4-thq-content-elm">
          <div className="footer4-thq-logo-elm1">
            <img
              alt={props.logoAlt}
              src={props.logoSrc}
              className="footer4-thq-logo-elm2"
            />
          </div>
          <div className="footer4-thq-links-elm">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link1 ?? (
                <Fragment>
                  <span className="footer4-text6">Home</span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link2 ?? (
                <Fragment>
                  <span className="footer4-text2">About Us</span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link3 ?? (
                <Fragment>
                  <span className="footer4-text4">Services</span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link4 ?? (
                <Fragment>
                  <span className="footer4-text1">Contact Us</span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link5 ?? (
                <Fragment>
                  <span className="footer4-text7">FAQs</span>
                </Fragment>
              )}
            </a>
          </div>
        </div>
        <div className="footer4-thq-credits-elm">
          <div className="thq-divider-horizontal"></div>
          <div className="footer4-thq-row-elm">
            <div className="footer4-container">
              <span className="thq-body-small">© 2024 TeleportHQ</span>
            </div>
            <div className="footer4-thq-footer-links-elm">
              <span className="footer4-thq-text-elm2 thq-body-small">
                {props.privacyLink ?? (
                  <Fragment>
                    <span className="footer4-text3">Privacy Policy</span>
                  </Fragment>
                )}
              </span>
              <span className="thq-body-small">
                {props.termsLink ?? (
                  <Fragment>
                    <span className="footer4-text8">Terms and Conditions</span>
                  </Fragment>
                )}
              </span>
              <span className="thq-body-small">
                {props.cookiesLink ?? (
                  <Fragment>
                    <span className="footer4-text5">Cookies Policy</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer4.defaultProps = {
  link4: undefined,
  link2: undefined,
  privacyLink: undefined,
  link3: undefined,
  logoAlt: 'Company Logo',
  cookiesLink: undefined,
  link1: undefined,
  link5: undefined,
  termsLink: undefined,
  logoSrc: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
}

Footer4.propTypes = {
  link4: PropTypes.element,
  link2: PropTypes.element,
  privacyLink: PropTypes.element,
  link3: PropTypes.element,
  logoAlt: PropTypes.string,
  cookiesLink: PropTypes.element,
  link1: PropTypes.element,
  link5: PropTypes.element,
  termsLink: PropTypes.element,
  logoSrc: PropTypes.string,
}

export default Footer4
