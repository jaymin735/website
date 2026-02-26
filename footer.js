import React from 'react'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <footer className="footer-root">
        <div className="footer-container">
          <div className="footer-layout">
            <div className="footer-brand footer-column">
              <div className="footer-logo-wrapper">
                <span className="footer-logo-text">YieldLodge</span>
              </div>
              <p className="footer-description section-content">
                Precision consulting for the hospitality elite. We transform
                mid-to-high market operations through brutal data diagnostics
                and actionable playbooks.
              </p>
              <div className="footer-social">
                <a href="#">
                  <div aria-label="LinkedIn" className="footer-social-link">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                        <circle r="2" cx="4" cy="4"></circle>
                      </g>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div aria-label="Twitter" className="footer-social-link">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div aria-label="Instagram" className="footer-social-link">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                          width="20"
                          height="20"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                      </g>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div className="footer-column">
              <h3 className="footer-heading section-subtitle">Industries</h3>
              <ul className="footer-links">
                <li className="footer-link-item">
                  <a href="/restaurants">
                    <div className="footer-link">
                      <span>Restaurants</span>
                    </div>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="/hotels">
                    <div className="footer-link">
                      <span>Hotels &amp; Resorts</span>
                    </div>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#">
                    <div className="footer-link">
                      <span>Asset Management</span>
                    </div>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#">
                    <div className="footer-link">
                      <span>Private Equity</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="footer-heading section-subtitle">Expertise</h3>
              <ul className="footer-links">
                <li className="footer-link-item">
                  <a href="#">
                    <div className="footer-link">
                      <span>Operational Diagnostic</span>
                    </div>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#">
                    <div className="footer-link">
                      <span>Pricing Optimization</span>
                    </div>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#">
                    <div className="footer-link">
                      <span>Go-To-Market Strategy</span>
                    </div>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#">
                    <div className="footer-link">
                      <span>Implementation Support</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-column footer-newsletter">
              <h3 className="footer-heading section-subtitle">Stay Informed</h3>
              <p className="footer-newsletter-text section-content">
                Receive our quarterly roadmap on hospitality growth and market
                trends.
              </p>
              <form
                action="/subscribe"
                method="POST"
                data-form-id="a7998338-de9d-44ca-ae9a-b6e386997993"
                className="footer-form"
              >
                <div className="footer-input-group">
                  <input
                    type="email"
                    id="thq_textinput_q7Ug"
                    name="textinput"
                    required="true"
                    aria-label="Email Address"
                    placeholder="Email Address"
                    data-form-field-id="thq_textinput_q7Ug"
                    className="footer-input"
                  />
                  <button
                    id="thq_button_eNMe"
                    name="button"
                    type="submit"
                    aria-label="Subscribe"
                    data-form-field-id="thq_button_eNMe"
                    className="footer-submit-btn"
                  >
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 12h14m-7-7l7 7l-7 7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-copyright">
              <span>
                &amp;copy; 2026 YieldLodge Consulting Group. All Rights
                Reserved.
              </span>
            </div>
            <div className="footer-legal">
              <a href="#">
                <div className="footer-legal-link">
                  <span>Privacy Policy</span>
                </div>
              </a>
              <a href="#">
                <div className="footer-legal-link">
                  <span>Terms of Service</span>
                </div>
              </a>
              <a href="#">
                <div className="footer-legal-link">
                  <span>Cookie Settings</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="footer-bg-accent"></div>
      </footer>
      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<script defer data-name="footer-newsletter-handler">
(function(){
  const footerForm = document.querySelector(".footer-form")
  const footerInput = document.querySelector(".footer-input")

  if (footerForm) {
    footerForm.addEventListener("submit", (e) => {
      const email = footerInput.value
      if (email) {
        // Visual feedback only as per constraints
        const originalBtn = footerForm.querySelector(".footer-submit-btn").innerHTML
        footerForm.querySelector(".footer-submit-btn").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 6L9 17l-5-5"/></svg>'
        footerForm.querySelector(".footer-submit-btn").style.backgroundColor = "#2ecc71"
        footerInput.disabled = true

        setTimeout(() => {
          footerForm.reset()
          footerInput.disabled = false
          footerForm.querySelector(".footer-submit-btn").innerHTML = originalBtn
          footerForm.querySelector(".footer-submit-btn").style.backgroundColor = ""
        }, 3000)
      }
    })
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Footer
