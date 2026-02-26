import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.navigation-mobile-overlay, .stagger-item, .navigation-link::after {
  transition: none;
  animation: none;
  opacity: 1;
  transform: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <nav id="main-navigation" className="navigation-wrapper">
        <div className="navigation-container">
          <Link to="/">
            <div aria-label="YieldLodge Home" className="navigation-logo">
              <span className="navigation-logo-text">
                <span>
                  {' '}
                  Yield
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>Lodge</span>
              </span>
            </div>
          </Link>
          <div className="navigation-desktop-menu">
            <ul className="navigation-links">
              <li>
                <Link to="/">
                  <div className="navigation-link">
                    <span>Home</span>
                  </div>
                </Link>
              </li>
              <li>
                <a href="Restaurants &amp; Hotels">
                  <div className="navigation-link">
                    <span>Industries</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#services">
                  <div className="navigation-link">
                    <span>Services</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#about">
                  <div className="navigation-link">
                    <span>About</span>
                  </div>
                </a>
              </li>
            </ul>
            <a href="#contact">
              <div className="btn-primary navigation-cta btn">
                <span>Get Diagnostic</span>
              </div>
            </a>
          </div>
          <button
            id="mobile-menu-toggle"
            aria-label="Open menu"
            aria-controls="mobile-overlay"
            aria-expanded="false"
            className="navigation-mobile-toggle"
          >
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M4 8h16M4 16h16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      <div
        id="mobile-overlay"
        aria-hidden="true"
        className="navigation-mobile-overlay"
      >
        <div className="navigation-mobile-header">
          <Link to="/">
            <div aria-label="YieldLodge Home" className="navigation-logo">
              <span className="navigation-logo-text">
                <span>
                  {' '}
                  Yield
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>Lodge</span>
              </span>
            </div>
          </Link>
          <button
            id="mobile-menu-close"
            aria-label="Close menu"
            className="navigation-mobile-close"
          >
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-5.5-3.5l-5 5m0-5l5 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
        <div className="navigation-mobile-content">
          <ul className="navigation-mobile-links">
            <li className="stagger-item">
              <Link to="/">
                <div className="navigation-mobile-link">
                  <span>Home</span>
                </div>
              </Link>
            </li>
            <li className="stagger-item">
              <a href="Restaurants &amp; Hotels">
                <div className="navigation-mobile-link">
                  <span>Industries</span>
                </div>
              </a>
            </li>
            <li className="stagger-item">
              <a href="#services">
                <div className="navigation-mobile-link">
                  <span>Services</span>
                </div>
              </a>
            </li>
            <li className="stagger-item">
              <a href="#about">
                <div className="navigation-mobile-link">
                  <span>About</span>
                </div>
              </a>
            </li>
          </ul>
          <div className="navigation-mobile-footer stagger-item">
            <p className="navigation-mobile-tagline">
              Optimizing operations for sustainable growth.
            </p>
            <a href="#contact">
              <div className="btn-primary btn-lg btn navigation-mobile-cta">
                <span>
                  {' '}
                  Start Your Roadmap
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
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
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="navigation-container4">
        <div className="navigation-container5">
          <Script
            html={`<style>
        @keyframes navSlideUp {to {opacity: 1;
transform: translateY(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="navigation-container6">
        <div className="navigation-container7">
          <Script
            html={`<script defer data-name="navigation-logic">
(function(){
  const navToggle = document.getElementById("mobile-menu-toggle")
  const navClose = document.getElementById("mobile-menu-close")
  const mobileOverlay = document.getElementById("mobile-overlay")
  const body = document.body

  const openMenu = () => {
    mobileOverlay.classList.add("is-open")
    mobileOverlay.setAttribute("aria-hidden", "false")
    navToggle.setAttribute("aria-expanded", "true")
    body.style.overflow = "hidden"
  }

  const closeMenu = () => {
    mobileOverlay.classList.remove("is-open")
    mobileOverlay.setAttribute("aria-hidden", "true")
    navToggle.setAttribute("aria-expanded", "false")
    body.style.overflow = ""
  }

  navToggle.addEventListener("click", openMenu)
  navClose.addEventListener("click", closeMenu)

  mobileOverlay.addEventListener("click", (e) => {
    if (e.target.classList.contains("navigation-mobile-link")) {
      closeMenu()
    }
  })

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileOverlay.classList.contains("is-open")) {
      closeMenu()
    }
  })

  let lastScroll = 0
  const navWrapper = document.querySelector(".navigation-wrapper")

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset

    if (currentScroll <= 0) {
      navWrapper.style.transform = "translateY(0)"
      return
    }

    if (currentScroll > lastScroll && !mobileOverlay.classList.contains("is-open")) {
      // Scrolling down
      navWrapper.style.transform = "translateY(-100%)"
    } else {
      // Scrolling up
      navWrapper.style.transform = "translateY(0)"
    }

    lastScroll = currentScroll
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Navigation
