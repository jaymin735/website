import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Focused Better Ant</title>
        <meta property="og:title" content="Focused Better Ant" />
        <link
          rel="canonical"
          href="https://focused-better-ant-9w2wsf.teleporthq.app/"
        />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text100">#home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101">#about us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102">#services</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103">#contact</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text104">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text105">About us</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text106">Services</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text107">Contact</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text108">Main Action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text109">Secondary Action</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text110">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text111">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text113">Page Four Description</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text114">Explore Now</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text115">Learn More</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text116">
              Discover the best products and services tailored just for you.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text117">Welcome to Our Website</span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text118">Feature 1 Title</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text119">Feature 2 Title</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text120">Feature 3 Title</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text121">
              Detailed description of feature 1
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text122">
              Detailed description of feature 2
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text123">
              Detailed description of feature 3
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text124">Sign Up</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Sign up now and start achieving your goals!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text126">
              Ready to boost your productivity?
            </span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text127">Advanced Security</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text128">Easy Integration</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text129">24/7 Support</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text130">
              Top-notch security measures to keep your data safe
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              Seamless integration with popular platforms and tools
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text132">
              Dedicated support team available round the clock
            </span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan1={
          <Fragment>
            <span className="home-text133">Basic plan</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text134">Business plan</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text135">Enterprise plan</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text136">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text137">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text138">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text139">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text140">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text141">Pricing plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text142">$9.99/month</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text143">$19.99/month</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text144">$29.99/month</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text145">Sign Up</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text146">$200/yr</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text147">or $200 yearly</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148">Sign Up</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text149">$299/yr</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text150">or $299 yearly</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text151">Sign Up</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text152">$499/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text153">or $499 yearly</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text154">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text155">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text156">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text157">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text158">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text159">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text160">Feature 1 included</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text161">Feature 2 included</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text162">Feature 3 included</span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text163">Feature 1 included</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text164">Feature 2 included</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text165">Feature 3 included</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text166">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text167">Feature 1 included</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text168">Feature 2 included</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text169">Feature 3 included</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text170">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text171">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text172">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text174">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text176">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text177">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text178">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text179">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text180">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text181">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text182">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text183">Feature text goes here</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text184">Step 1: Sign Up</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text185">Step 2: Explore Features</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text186">Step 3: Customize Settings</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text187">
              Step 4: Start Using Our Services
            </span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text188">
              Create an account to get started on our platform.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text189">
              Discover the various tools and functionalities available to
              enhance your experience.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text190">
              Personalize your profile and settings to suit your preferences.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text191">
              Begin utilizing our services and enjoy the benefits of our
              platform.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text192">
              Great experience with the service provided. Highly recommend!
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text193">
              The team was professional and efficient. Will definitely use their
              services again.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text194">
              Impressed with the quality of work delivered. Thank you for
              exceeding our expectations!
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text195">
              Outstanding service and support throughout the project.
              Couldn&apos;t be happier with the results.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text196">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text197">What Our Customers Say</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text198">John Doe</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text199">Jane Smith</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text200">David Johnson</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text201">Sarah Lee</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text202">CEO, Company ABC</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text203">Marketing Manager, XYZ Inc.</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text204">Founder, Startup123</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text205">CTO, Tech Solutions Ltd.</span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text206">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text207">Locations</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text208">Bucharest</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text209">Cluj - Napoca</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text210">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text211">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text212">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text213">About Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text214">Services</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text215">Contact Us</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text216">FAQs</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text217">Terms and Conditions</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text218">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text219">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
      <a href="https://play.teleporthq.io/signup">
        <div aria-label="Sign up to TeleportHQ" className="home-container2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="home-icon1"
          >
            <path
              d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
              fill="#B23ADE"
            ></path>
            <path
              d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
              fill="#FF5C5C"
            ></path>
            <path
              d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
              fill="#2874DE"
            ></path>
          </svg>
          <span className="home-text220">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Home
