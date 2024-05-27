import React from "react";
import { Link } from "react-router-dom";

import {
  HomeBannerTopLineWrapImg,
  HomeBannerBottomLineWrapImg,
  HomeBannerCurveWrap,
  HomeStarWrapIcon,
  HomeBannerImage,
  HomePartnerLogoAreaUp1,
  HomePartnerLogoAreaUp2,
  HomePartnerLogoAreaUp3,
  HomePartnerLogoAreaUp4,
  HomePartnerLogoAreaUp5,
  HomePartnerLogoAreaUp6,
  HomePartnerLogoAreaDown1,
  HomePartnerLogoAreaDown2,
  HomePartnerLogoAreaDown3,
  HomePartnerLogoAreaDown4,
  HomePartnerLogoAreaDown5,
  HomeServiceSectionIconWrap,
  ServicesBackgroundImage1,
  ServicesBackgroundImage2,
  ServicesBackgroundImage3,
  ServicesBackgroundImage4,
  HomePinkQuoteIcon,
  HomeWorkSlideImage1,
  HomeWorkSlideImage2,
  HomeWorkSlideImage4,
  HomeWorkSlideImage5,
  HomeWorkSlideRightIcon,
  HomeWorkSlideBackground,
  HomeSectionIcon,
  HomePortlightImage,
  HomePortlightVideoImage,
  HomeMapWhiteBackground,
  HomeMapAtIcon,
  HomeMapDocIcon,
  HomeMapArrowIcon,
  HomeMapGlobeIcon,
  HomeMapSaveIcon,
  HomeMapCircleIcon,
  HomeMapTextIcon,
  HomeMapTopPinkLine,
  HomeMapTopPinkLineEmpty,
  HomeMapYellowLine,
  HomeMapBottomDarkLine,
  HomeMapBottomPinkLine,
  HomeMapTopDarkLine,
  HomeMapVioletLine,
  HomeMapPinkLine,
  HomeMapDarkLine,
  HomeMapOrangeLine,
  HomeTestimonialImage1,
  HomeTestimonialImage2,
  HomeTestimonialImage3,
  HomeTestimonialImage4,
  HomeTestimonialQuoteIcon,
  HomeSocialIconPhoneImage,
  HomeSocialIconMail,
  HomeSocialIconCathub,
  HomeSocialIconQuote,
  HomeSocialIconCloud,
  HomeSocialIconMessage,
  HomeSocialIconPlay,
  HomeSocialIconP,
  HomeSocialIconSave,
  HomeSocialIconRocket,
  HomeSocialIconSlack,
  HomeSocialIconY,
  HomeHowItWorksIconSection,
  HomeHowItWorksIconWhite,
  HomeHowItWorksIcon3,
  HomeHowItWorksIcon4,
  HomePricingSectionIcon,
  HomePricingTickIcon,
  HomePricingTickIconDark,
} from "../../../assets/images";

export default function ComponentA() {
  const partnerLogoArea = [
    {
      Up: [
        {
          image: HomePartnerLogoAreaUp1,
        },
        {
          image: HomePartnerLogoAreaUp2,
        },
        {
          image: HomePartnerLogoAreaUp3,
        },
        {
          image: HomePartnerLogoAreaUp4,
        },
        {
          image: HomePartnerLogoAreaUp5,
        },
        {
          image: HomePartnerLogoAreaUp6,
        },
      ],
    },
    {
      Down: [
        {
          image: HomePartnerLogoAreaDown1,
        },
        {
          image: HomePartnerLogoAreaDown2,
        },
        {
          image: HomePartnerLogoAreaDown3,
        },
        {
          image: HomePartnerLogoAreaDown4,
        },
        {
          image: HomePartnerLogoAreaDown5,
        },
      ],
    },
  ];
  return (
    <>
      <div className="home-gradient-banner-bg">
        <section className="home-banner-section">
          <div className="w-layout-blockcontainer container w-container">
            <div className="home-banner-title-wrap">
              <div className="home-banner-title-area">
                <h1 className="banner-title bright">
                  Crafting Beautiful &amp; User-Friendly Websites
                </h1>
              </div>
              <div className="home-banner-top-line-wrap">
                <img src={HomeBannerTopLineWrapImg} alt="" />
              </div>
              <div className="home-banner-bottom-line-wrap">
                <img src={HomeBannerBottomLineWrapImg} alt="" />
              </div>
              <div className="home-banner-curve-wrap">
                <img src={HomeBannerCurveWrap} alt="" />
              </div>
            </div>
            <div className="sign-up-area">
              <div className="star-wrap">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src={HomeStarWrapIcon} alt="Icon" />
                ))}
              </div>
              <p class="sign-up-text">A global favorite among teams.</p>
              <div className="sign-up-form-area w-form">
                <form action="" className="sign-up-form">
                  <input type="email" className="sign-up-text-field w-input" />
                  <input
                    type="password"
                    className="sign-up-text-field password w-input"
                  />
                  <input type="submit" className="sign-up-button w-button" />
                </form>
                <div className="success-message w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="error-message w-form-fail">
                  <div>
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div>
              <p class="sign-up-bottom-text">
                DeFlow is highly regarded by 99.9% of them.
              </p>
            </div>
          </div>
          <div className="home-banner-sticky-wrap">
            <div className="home-banner-sticky">
              <div className="home-banner-video-wrap">
                <img
                  src={HomeBannerImage}
                  alt=""
                  className="home-banner-image"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="partner-section">
          <div className="w-layout-blockcontainer container w-container">
            <div className="partner-text-wrap">
              <p>
                Online identity and generating tangible results. Our{" "}
                <span class="text-yellow">dynamic team</span>, composed of{" "}
                <span class="grey-dark-text">creative visionaries</span> and
                technical gurus, specializes in crafting unique websites that
                not only engage audiences but also provide seamless user
                experiences.
              </p>
            </div>
            <div className="partner-title-wrap">
              <h2 className="partner-title">Loved by teams around the world</h2>
              <div className="partner-logo-wrap">
                {partnerLogoArea[0].Up.map((logo, index) => (
                  <div key={index} className="partner-logo-area">
                    <img src={logo.image} alt="Logo" />
                  </div>
                ))}
              </div>
              <div className="partner-logo-wrap bottom">
                {partnerLogoArea[1].Down.map((logo, index) => (
                  <div key={index} className="partner-logo-area">
                    <img src={logo.image} alt="Logo" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="service-section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="service-banner-title-wrap">
            <div className="section-subtitle-wrap">
              <div className="section-linear-icon-wrap">
                <div className="section-icon-wrap">
                  <img src={HomeServiceSectionIconWrap} alt="Icon" />
                </div>
              </div>
              <div>Services</div>
              <div className="section-subtitle-line"></div>
            </div>
            <h2 class="section-title">
              Survey and embrace in a whole new dimension.
            </h2>
          </div>
          <div className="service-wrap">
            <div className="w-dyn-list">
              <div className="w-dyn-items">
                <div className="w-dyn-item">
                  <div className="service-card-large">
                    <div className="service-content-wrap">
                      <Link
                        to={"/services/sight-identity"}
                        className="service-card-title"
                      >
                        Sight Identity
                      </Link>
                      <p>
                        Appearance and it encapsulates the deliberate use of
                        colors, typography, imagery, and other visual elements
                        to convey a specific message or evoke a particular
                        emotion.
                      </p>
                      <div className="section-card-button-wrap">
                        <Link
                          to={"/services/sight-identity"}
                          className="gradient-button w-inline-block"
                        >
                          <div className="gradient-button-area small">
                            <div>Read More</div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="service-image-wrap">
                      <img src={ServicesBackgroundImage1} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="service-card-wrap">
              <div className="w-dyn-list">
                <div className="w-dyn-items w-row">
                  <div className="service-collection-item w-dyn-item w-col w-col-6">
                    <div className="service-card">
                      <div className="service-content-wrap">
                        <Link
                          to={"/services/seo-analysis"}
                          className="service-card-title"
                        >
                          SEO Analysis
                        </Link>
                        <div className="service-content-area">
                          <p>
                            Referred to as natural or unpaid search, the
                            retrieval of search results based on relevance
                            rather than paid advertising.
                          </p>
                        </div>
                        <div className="section-card-button-wrap">
                          <Link
                            to={"/services/seo-analysis"}
                            className="gradient-button w-inline-block"
                          >
                            <div className="gradient-button-area small">
                              <div>Read More</div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="service-card-image-wrap">
                        <img src={ServicesBackgroundImage2} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="service-collection-item w-dyn-item w-col w-col-6">
                    <div className="service-card">
                      <div className="service-content-wrap">
                        <Link
                          to={"/services/development"}
                          className="service-card-title"
                        >
                          Development
                        </Link>
                        <div className="service-content-area">
                          <p>
                            World of code-related development, where creativity
                            &amp; logic converge to build the foundation of our
                            digital future.
                          </p>
                        </div>
                        <div className="section-card-button-wrap">
                          <Link
                            to={"/services/development"}
                            className="gradient-button w-inline-block"
                          >
                            <div className="gradient-button-area small">
                              <div>Read More</div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="service-card-image-wrap">
                        <img src={ServicesBackgroundImage3} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-dyn-list">
              <div className="w-dyn-items">
                <div className="w-dyn-item">
                  <div className="service-card-large two">
                    <div className="service-content-wrap">
                      <Link
                        to={"/services/e-marketing"}
                        className="service-card-title"
                      >
                        E-Marketing
                      </Link>
                      <p>
                        SEO, content marketing, and online advertising,
                        E-Marketing aims to create brand awareness, engage
                        customers, and foster lasting relationships in the
                        digital realm.
                      </p>
                      <div className="section-card-button-wrap">
                        <Link
                          to={"/services/e-marketing"}
                          className="gradient-button w-inline-block"
                        >
                          <div className="gradient-button-area small">
                            <div>Read More</div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="service-image-wrap">
                      <img src={ServicesBackgroundImage4} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 class="home-features-title">Features</h2>
      </section>
      <div className="white-bg-patten-wrap">
        <section className="counter-section">
          <div className="w-layout-blockcontainer container w-container">
            <div className="counter-area">
              <div className="counter-wrap">
                <div className="counter-number-wrap">
                  <h2 class="counter-number">10</h2>
                  <p className="counter-title">Year in the Field</p>
                </div>
                <div className="counter-text-wrap">
                  <p>
                    Guiding future endeavours and fostering continuous
                    improvement.
                  </p>
                </div>
              </div>
              <div className="counter-wrap">
                <div className="counter-number-wrap">
                  <h2 class="counter-number">95+</h2>
                  <p className="counter-title">Project Finalized</p>
                </div>
                <div className="counter-text-wrap">
                  <p>
                    Bringing together innovation and dedication to achieve our
                    goals.
                  </p>
                </div>
              </div>
              <div className="counter-wrap">
                <div className="counter-number-wrap">
                  <h2 class="counter-number">4.9</h2>
                  <p className="counter-title">Regular Ratting</p>
                </div>
                <div className="counter-text-wrap">
                  <p>
                    Dependable measure of the overall quality or performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="white-animation-wrap home">
          <section className="work-white-section">
            <div className="w-layout-blockcontainer container w-container">
              <div className="w-layout-grid work-title-grid">
                <div>
                  <div className="section-subtitle-wrap">
                    <div className="section-linear-icon-wrap violet">
                      <div className="section-icon-wrap grey-bg">
                        <img src={HomePinkQuoteIcon} alt="Icon" />
                      </div>
                    </div>
                    <div>Work</div>
                    <div class="section-subtitle-line violet-bg"></div>
                  </div>
                  <h2 class="section-title">
                    Digital outfit, Took offers a{" "}
                    <span class="text-grey">
                      compare set of creative assignments, ranging from brand
                      building to online promotional activities
                    </span>
                    .
                  </h2>
                </div>
                <div>
                  <p>
                    Development to online promotions, offering a comprehensive
                    suite of creative solutions
                  </p>
                </div>
              </div>
              <div className="work-slider w-slider">
                <div className="work-mask w-slider-mask">
                  <div className="work-slide w-slide" aria-label="1 of 5">
                    <div className="work-slider-card" aria-hidden="true">
                      <div className="work-slide-image-wrap" aria-hidden="true">
                        <img
                          src={HomeWorkSlideImage1}
                          alt="Image"
                          className="work-slide-image"
                        />
                      </div>
                    </div>
                    <div className="work-slide-content-wrap" aria-hidden="true">
                      <h3 className="work-slide-card-title" aria-hidden="true">
                        The Prime Chat Case Study in Its Entirety
                      </h3>
                      <Link
                        to={"/works"}
                        className="work-slide-link w-inline-block"
                        aria-hidden="true"
                      >
                        <div
                          className="work-slide-arrow-gradient"
                          aria-hidden="true"
                        >
                          <img
                            src={HomeWorkSlideRightIcon}
                            alt="Icon"
                            aria-hidden="true"
                          />
                        </div>
                        <div aria-hidden="true">see full work</div>
                      </Link>
                    </div>
                  </div>
                  <div className="work-slide w-slide" aria-label="2 of 5">
                    <div className="work-slider-card" aria-hidden="true">
                      <div className="work-slide-image-wrap" aria-hidden="true">
                        <img
                          src={HomeWorkSlideImage2}
                          alt="Image"
                          className="work-slide-image"
                        />
                      </div>
                    </div>
                    <div className="work-slide-content-wrap" aria-hidden="true">
                      <h3 className="work-slide-card-title" aria-hidden="true">
                        Case Study: A iPad pro Comprehensive Overview
                      </h3>
                      <Link
                        to={"/works"}
                        className="work-slide-link w-inline-block"
                        aria-hidden="true"
                      >
                        <div
                          className="work-slide-arrow-gradient"
                          aria-hidden="true"
                        >
                          <img
                            src={HomeWorkSlideRightIcon}
                            alt="Icon"
                            aria-hidden="true"
                          />
                        </div>
                        <div aria-hidden="true">see full work</div>
                      </Link>
                    </div>
                  </div>
                  <div className="work-slide w-slide" aria-label="3 of 5">
                    <div className="work-slider-card">
                      <div className="work-slide-image-wrap">
                        <img
                          src={HomeWorkSlideImage2}
                          alt="Image"
                          className="work-slide-image"
                        />
                        <div className="work-slide-video w-background-video w-background-video-atom">
                          <video>
                            <source src="https://assets-global.website-files.com/6579859bf6ab8ef2740024c3/65bb2a68c3ef64978cb63557_VN20231010_125616-transcode.mp4" />
                            <source src="https://assets-global.website-files.com/6579859bf6ab8ef2740024c3/65bb2a68c3ef64978cb63557_VN20231010_125616-transcode.webm" />
                          </video>
                        </div>
                      </div>
                    </div>
                    <div className="work-slide-content-wrap">
                      <h3 className="work-slide-card-title">
                        The Nooom UX Design full Case Study
                      </h3>
                      <Link
                        to={"/works"}
                        className="work-slide-link w-inline-block"
                      >
                        <div className="work-slide-arrow-gradient">
                          <img src={HomeWorkSlideRightIcon} alt="Icon" />
                        </div>
                        <div>see full work</div>
                      </Link>
                    </div>
                  </div>
                  <div className="work-slide w-slide" aria-label="4 of 5">
                    <div className="work-slider-card" aria-hidden="true">
                      <div className="work-slide-image-wrap" aria-hidden="true">
                        <img
                          src={HomeWorkSlideImage4}
                          alt="Image"
                          className="work-slide-image"
                        />
                      </div>
                    </div>
                    <div className="work-slide-content-wrap" aria-hidden="true">
                      <h3 className="work-slide-card-title" aria-hidden="true">
                        The Money co UX Design full Case Study
                      </h3>
                      <Link
                        to={"/works"}
                        className="work-slide-link w-inline-block"
                        aria-hidden="true"
                      >
                        <div
                          className="work-slide-arrow-gradient"
                          aria-hidden="true"
                        >
                          <img
                            src={HomeWorkSlideRightIcon}
                            alt="Icon"
                            aria-hidden="true"
                          />
                        </div>
                        <div aria-hidden="true">see full work</div>
                      </Link>
                    </div>
                  </div>
                  <div className="work-slide w-slide" aria-label="5 of 5">
                    <div className="work-slider-card" aria-hidden="true">
                      <div className="work-slide-image-wrap" aria-hidden="true">
                        <img
                          src={HomeWorkSlideImage5}
                          alt="Image"
                          className="work-slide-image"
                        />
                      </div>
                    </div>
                    <div className="work-slide-content-wrap" aria-hidden="true">
                      <h3 className="work-slide-card-title" aria-hidden="true">
                        A Deep Dive into the Full Case Study
                      </h3>
                      <Link
                        to={"/works"}
                        className="work-slide-link w-inline-block"
                        aria-hidden="true"
                      >
                        <div
                          className="work-slide-arrow-gradient"
                          aria-hidden="true"
                        >
                          <img
                            src={HomeWorkSlideRightIcon}
                            alt="Icon"
                            aria-hidden="true"
                          />
                        </div>
                        <div aria-hidden="true">see full work</div>
                      </Link>
                    </div>
                  </div>
                  <div className="w-slider-aria-label">Slide 3 of 5.</div>
                </div>
                <div className="work-slide-arrow right w-slider-arrow-left">
                  <div className="work-slide-arrow-wrap">
                    <div className="work-slide-arrow-area">
                      <div className="work-slide-arrow-gradient">
                        <div className="w-icon-slider-left"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="work-slide-arrow left w-slider-arrow-right">
                  <div className="work-slide-arrow-wrap">
                    <div className="work-slide-arrow-area">
                      <div className="work-slide-arrow-gradient">
                        <div className="w-icon-slider-right"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="work-slide-nav w-slider-nav w-slider-nav-invert w-round">
                  <div
                    aria-label="Show slide 1 of 5"
                    aria-pressed="false"
                    className="w-slider-dot"
                  ></div>
                  <div
                    aria-label="Show slide 2 of 5"
                    aria-pressed="false"
                    className="w-slider-dot"
                  ></div>
                  <div
                    aria-label="Show slide 3 of 5"
                    aria-pressed="true"
                    className="w-slider-dot"
                  ></div>
                  <div
                    aria-label="Show slide 4 of 5"
                    aria-pressed="false"
                    className="w-slider-dot"
                  ></div>
                  <div
                    aria-label="Show slide 5 of 5"
                    aria-pressed="false"
                    className="w-slider-dot"
                  ></div>
                </div>
                <div className="work-slide-bg-wrap">
                  <img src={HomeWorkSlideBackground} alt="" />
                </div>
              </div>
            </div>
          </section>
          <section className="feature-work-section">
            <div className="w-layout-blockcontainer container w-container">
              <div className="portlight-top-line"></div>
              <div className="related-work-title-wrap">
                <div className="pricing-section-title-wrap">
                  <div className="section-subtitle-wrap">
                    <div className="section-linear-icon-wrap pink">
                      <div className="section-icon-wrap grey-bg">
                        <img src={HomeSectionIcon} alt="Icon" />
                      </div>
                    </div>
                    <div>Featured Work</div>
                    <div className="section-subtitle-line violet-bg"></div>
                  </div>
                  <h2 className="section-title">Portlight - Agency Website</h2>
                </div>
                <div className="related-work-title-button-wrap">
                  <Link
                    to={"/work"}
                    className="gradient-button dark w-inline-block"
                  >
                    <div className="gradient-button-area white">
                      <div>Preview Project</div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="portlight-area">
                <h3 className="portlight-title">Portlight</h3>
                <div className="portlight-image-wrap">
                  <img src={HomePortlightImage} alt="Image" />
                  <div className="portlight-image-bottom-blur"></div>
                  <div className="portlight-video-wrap">
                    <img src={HomePortlightVideoImage} alt="" />
                    <div className="portlight-video w-background-video w-background-video-atom">
                      <video>
                        <source src="https://assets-global.website-files.com/6579859bf6ab8ef2740024c3/65b9c5ebdbc9b8ad7e6480c8_Portlight - Webflow HTML website template-transcode.mp4" />
                        <source src="https://assets-global.website-files.com/6579859bf6ab8ef2740024c3/65b9c5ebdbc9b8ad7e6480c8_Portlight - Webflow HTML website template-transcode.webm" />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
              <div className="map-wrap">
                <div className="align-center">
                  <h2 className="map-section-title">
                    Our team is spread across the globe.
                  </h2>
                </div>
                <div className="map-area">
                  <img src={HomeMapWhiteBackground} alt="" />
                  <div className="map-at-icon-wrap violet">
                    <img src={HomeMapAtIcon} alt="Icon" />
                  </div>
                  <div className="map-doc-icon-wrap orange">
                    <img src={HomeMapDocIcon} alt="Icon" />
                  </div>
                  <div className="map-arrow-icon-wrap pink">
                    <img src={HomeMapArrowIcon} alt="Icon" />
                  </div>
                  <div className="map-globe-icon-wrap blue">
                    <img src={HomeMapGlobeIcon} alt="Icon" />
                  </div>
                  <div className="map-save-icon-wrap yellow">
                    <img src={HomeMapSaveIcon} alt="Icon" />
                  </div>
                  <div className="map-circle-icon-wrap green">
                    <img src={HomeMapCircleIcon} alt="Icon" />
                  </div>
                  <div className="map-text-wrap">
                    <img src={HomeMapTextIcon} alt="Icon" />
                  </div>
                  <div className="map-line top-pink-line">
                    <img
                      src={HomeMapTopPinkLine}
                      alt=""
                      className="map-line-image-color"
                    />
                    <img
                      src={HomeMapTopPinkLineEmpty}
                      alt=""
                      className="map-line-image"
                    />
                  </div>
                  <div className="map-line yellow-line">
                    <img
                      src={HomeMapYellowLine}
                      alt=""
                      className="map-line-image"
                    />
                  </div>
                  <div className="map-line bottom-dark-line">
                    <img
                      src={HomeMapBottomDarkLine}
                      alt=""
                      className="map-line-image"
                    />
                  </div>
                  <div className="map-line bottom-pink-line">
                    <img
                      src={HomeMapBottomPinkLine}
                      alt=""
                      className="map-line-image"
                    />
                  </div>
                  <div className="map-line top-dark-line">
                    <img
                      src={HomeMapTopDarkLine}
                      alt=""
                      className="map-line-image"
                    />
                  </div>
                  <div className="map-line violet-line">
                    <img
                      src={HomeMapVioletLine}
                      alt=""
                      className="map-line-image"
                    />
                  </div>
                  <div className="map-line pink-line">
                    <img
                      src={HomeMapPinkLine}
                      alt=""
                      className="map-line-image"
                    />
                  </div>
                  <div className="map-line dark-line">
                    <img
                      src={HomeMapDarkLine}
                      alt=""
                      className="map-line-image"
                    />
                  </div>
                  <div className="map-line orange-line">
                    <img
                      src={HomeMapOrangeLine}
                      alt=""
                      className="map-line-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="testimonial-section">
            <div className="w-layout-blockcontainer container w-container">
              <div className="testimonial-tab-area white">
                <div className="testimonial-tab w-tabs">
                  <div className="testimonial-tab-menu w-tab-menu">
                    <Link
                      data-w-tab={"Tab "}
                      to={"#w-tabs-0-data-w-pane-0"}
                      aria-controls="w-tabs-0-data-w-pane-0"
                      aria-selected="true"
                      className="testimonial-tab-link dark w-inline-block w-tab-link w--current"
                    >
                      <div className="testimonial-image-wrap">
                        <img
                          src={HomeTestimonialImage1}
                          alt="Image"
                          className="testimonial-image"
                        />
                        <div
                          class="testimonial-gradient-bg"
                          style={{ opacity: 1 }}
                        ></div>
                      </div>
                      <div>
                        <div>Sophia Rose</div>
                        <p className="testimonial-designation">SEO Analyst</p>
                      </div>
                    </Link>
                    <Link
                      data-w-tab={"Tab 2"}
                      to={"#w-tabs-0-data-w-pane-1"}
                      aria-controls="w-tabs-0-data-w-pane-1"
                      aria-selected="false"
                      className="testimonial-tab-link dark w-inline-block w-tab-link"
                    >
                      <div className="testimonial-image-wrap">
                        <img
                          src={HomeTestimonialImage2}
                          alt="Image"
                          className="testimonial-image"
                        />
                        <div
                          class="testimonial-gradient-bg"
                          style={{ opacity: 0 }}
                        ></div>
                      </div>
                      <div>
                        <div>Jordan Taylor</div>
                        <p className="testimonial-designation">
                          Digital Marketing Manager
                        </p>
                      </div>
                    </Link>
                    <Link
                      data-w-tab={"Tab 3"}
                      to={"#w-tabs-0-data-w-pane-2"}
                      aria-controls="w-tabs-0-data-w-pane-2"
                      aria-selected="false"
                      className="testimonial-tab-link dark w-inline-block w-tab-link"
                    >
                      <div className="testimonial-image-wrap">
                        <img
                          src={HomeTestimonialImage3}
                          alt="Image"
                          className="testimonial-image"
                        />
                        <div
                          class="testimonial-gradient-bg"
                          style={{ opacity: 0 }}
                        ></div>
                      </div>
                      <div>
                        <div>Riley Cooper</div>
                        <p className="testimonial-designation">
                          Content Strategist
                        </p>
                      </div>
                    </Link>
                    <Link
                      data-w-tab={"Tab 4"}
                      to={"#w-tabs-0-data-w-pane-3"}
                      aria-controls="w-tabs-0-data-w-pane-3"
                      aria-selected="false"
                      className="testimonial-tab-link dark w-inline-block w-tab-link"
                    >
                      <div className="testimonial-image-wrap">
                        <img
                          src={HomeTestimonialImage4}
                          alt="Image"
                          className="testimonial-image"
                        />
                        <div
                          class="testimonial-gradient-bg"
                          style={{ opacity: 0 }}
                        ></div>
                      </div>
                      <div>
                        <div>Avery Collins</div>
                        <p className="testimonial-designation">
                          Social Media Coordinator
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div className="w-tab-content">
                    <div
                      data-w-tab={"Tab 1"}
                      className="w-tab-pane w--tab-active"
                    >
                      <div className="testimonial-card">
                        <p className="testimonial-text">
                          We partnered with went above and beyond, providing
                          tailored solutions that perfectly aligned with our
                          brand's unique requirements.
                        </p>
                        <div className="testimonial-quote-wrap">
                          <img src={HomeTestimonialQuoteIcon} alt="Icon" />
                        </div>
                      </div>
                    </div>
                    <div data-w-tab={"Tab 2"} className="w-tab-pane">
                      <div className="testimonial-card">
                        <p className="testimonial-text">
                          Attention to detail and a steadfast commitment to our
                          goals – the agency's services were indispensable in
                          achieving our objectives.{" "}
                        </p>
                        <div className="testimonial-quote-wrap">
                          <img src={HomeTestimonialQuoteIcon} alt="Icon" />
                        </div>
                      </div>
                    </div>
                    <div data-w-tab={"Tab 3"} className="w-tab-pane">
                      <div className="testimonial-card">
                        <p className="testimonial-text">
                          Our decision to work with an agency proved
                          transformative, with their expertise and dedication
                          playing a pivotal role in our overall success.
                        </p>
                        <div className="testimonial-quote-wrap">
                          <img src={HomeTestimonialQuoteIcon} alt="Icon" />
                        </div>
                      </div>
                    </div>
                    <div data-w-tab={"Tab 4"} className="w-tab-pane">
                      <div className="testimonial-card">
                        <p className="testimonial-text">
                          Strategic insights from the agency significantly
                          contributed to the growth &amp; positioning of our
                          brand in the market.
                        </p>
                        <div className="testimonial-quote-wrap">
                          <img src={HomeTestimonialQuoteIcon} alt="Icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="social-icon-section">
            <div className="w-layout-blockcontainer container w-container">
              <div className="social-icon-wrap">
                <div className="phone-image-wrap">
                  <img src={HomeSocialIconPhoneImage} alt="Image" />
                </div>
                <div className="mail-icon-wrap">
                  <img src={HomeSocialIconMail} alt="Icon" />
                </div>
                <div className="cathub-icon-wrap">
                  <img src={HomeSocialIconCathub} alt="Icon" />
                </div>
                <div className="quote-icon-wrap">
                  <img src={HomeSocialIconQuote} alt="Icon" />
                </div>
                <div className="cloud-icon-wrap">
                  <img src={HomeSocialIconCloud} alt="Icon" />
                </div>
                <div className="message-icon-wrap">
                  <img src={HomeSocialIconMessage} alt="Icon" />
                </div>
                <div className="Video-icon-wrap">
                  <img src={HomeSocialIconPlay} alt="Icon" />
                </div>
                <div className="pinterest-icon-wrap">
                  <img src={HomeSocialIconP} alt="Icon" />
                </div>
                <div className="save-icon-wrap">
                  <img src={HomeSocialIconSave} alt="Icon" />
                </div>
                <div className="rocket-icon-wrap">
                  <img src={HomeSocialIconRocket} alt="Icon" />
                </div>
                <div className="slack-icon-wrap">
                  <img src={HomeSocialIconSlack} alt="Icon" />
                </div>
                <div className="zapy-icon-wrap">
                  <img src={HomeSocialIconY} alt="Icon" />
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="how-it-work-section">
          <div className="w-layout-blockcontainer container w-container">
            <div className="pricing-section-title-wrap">
              <div className="section-subtitle-wrap">
                <div className="section-linear-icon-wrap pink">
                  <div className="section-icon-wrap">
                    <img src={HomeHowItWorksIconSection} alt="Icon" />
                  </div>
                </div>
                <div>How it work</div>
                <div className="section-subtitle-line pink-bg"></div>
              </div>
              <h2 className="section-title">
                Decoding Took's simple processes.
              </h2>
            </div>
            <div className="how-it-works-area">
              <div className="how-it-works-linear-wrap">
                <div className="how-it-works-wrap">
                  <div className="how-it-works-card-area">
                    <div className="how-it-works-card">
                      <div className="how-it-works-card-top-linear">
                        <div className="how-it-works-card-top">
                          <div className="how-it-works-card-number">
                            <div>01</div>
                          </div>
                        </div>
                      </div>
                      <div className="how-it-works-card-bottom-linear">
                        <div className="how-it-works-card-bottom">
                          <div className="how-it-works-icon-wrap">
                            <img src={HomeHowItWorksIconWhite} alt="Icon" />
                            <p className="how-it-works-text">Research</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="how-it-works-card">
                      <div className="how-it-works-card-top-linear">
                        <div className="how-it-works-card-top">
                          <div className="how-it-works-card-number">
                            <div>02</div>
                          </div>
                        </div>
                      </div>
                      <div className="how-it-works-card-bottom-linear">
                        <div className="how-it-works-card-bottom">
                          <div className="how-it-works-icon-wrap">
                            <img src={HomeHowItWorksIconWhite} alt="Icon" />
                            <p className="how-it-works-text">Content</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="how-it-works-number-wrap">
                    <p className="how-it-works-number">01</p>
                  </div>
                </div>
              </div>
              <div className="how-it-works-linear-wrap middle">
                <div className="how-it-works-wrap">
                  <div className="how-it-works-card-area">
                    <div className="how-it-works-card">
                      <div className="how-it-works-card-top-linear">
                        <div className="how-it-works-card-top">
                          <div className="how-it-works-card-number">
                            <div>03</div>
                          </div>
                        </div>
                      </div>
                      <div className="how-it-works-card-bottom-linear">
                        <div className="how-it-works-card-bottom">
                          <div className="how-it-works-icon-wrap">
                            <img src={HomeHowItWorksIcon3} alt="Icon" />
                            <p className="how-it-works-text">Design</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="how-it-works-card">
                      <div className="how-it-works-card-top-linear">
                        <div className="how-it-works-card-top">
                          <div className="how-it-works-card-number">
                            <div>04</div>
                          </div>
                        </div>
                      </div>
                      <div className="how-it-works-card-bottom-linear">
                        <div className="how-it-works-card-bottom">
                          <div className="how-it-works-icon-wrap">
                            <img src={HomeHowItWorksIcon4} alt="Icon" />
                            <p className="how-it-works-text">Development</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="how-it-works-card">
                      <div className="how-it-works-card-top-linear">
                        <div className="how-it-works-card-top">
                          <div className="how-it-works-card-number">
                            <div>05</div>
                          </div>
                        </div>
                      </div>
                      <div className="how-it-works-card-bottom-linear">
                        <div className="how-it-works-card-bottom">
                          <div className="how-it-works-icon-wrap">
                            <img src={HomeHowItWorksIconWhite} alt="Icon" />
                            <p className="how-it-works-text">
                              Fast Prototyping
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="how-it-works-number-wrap">
                    <p className="how-it-works-number yellow">02</p>
                  </div>
                </div>
              </div>
              <div className="how-it-works-linear-wrap last">
                <div className="how-it-works-wrap">
                  <div className="how-it-works-card-area">
                    <div className="how-it-works-card">
                      <div className="how-it-works-card-top-linear">
                        <div className="how-it-works-card-top">
                          <div className="how-it-works-card-number">
                            <div>06</div>
                          </div>
                        </div>
                      </div>
                      <div className="how-it-works-card-bottom-linear">
                        <div className="how-it-works-card-bottom">
                          <div className="how-it-works-icon-wrap">
                            <img src={HomeHowItWorksIconWhite} alt="Icon" />
                            <p className="how-it-works-text">Qualty Checking</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="how-it-works-card">
                      <div className="how-it-works-card-top-linear">
                        <div className="how-it-works-card-top">
                          <div className="how-it-works-card-number">
                            <div>07</div>
                          </div>
                        </div>
                      </div>
                      <div className="how-it-works-card-bottom-linear">
                        <div className="how-it-works-card-bottom">
                          <div className="how-it-works-icon-wrap">
                            <img src={HomeHowItWorksIconWhite} alt="Icon" />
                            <p className="how-it-works-text">Website Live</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="how-it-works-card">
                      <div className="how-it-works-card-top-linear">
                        <div className="how-it-works-card-top">
                          <div className="how-it-works-card-number">
                            <div>08</div>
                          </div>
                        </div>
                      </div>
                      <div className="how-it-works-card-bottom-linear">
                        <div className="how-it-works-card-bottom">
                          <div className="how-it-works-icon-wrap">
                            <img src={HomeHowItWorksIconWhite} alt="Icon" />
                            <p className="how-it-works-text">SEO Analytics</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="how-it-works-number-wrap">
                    <p className="how-it-works-number blue">03</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="home-pricing-section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="pricing-section-title-wrap">
            <div className="section-subtitle-wrap">
              <div className="section-linear-icon-wrap">
                <div className="section-icon-wrap">
                  <img src={HomePricingSectionIcon} alt="Icon" />
                </div>
              </div>
              <div>Pricing</div>
              <div className="section-subtitle-line"></div>
            </div>
            <h2 className="section-title">Ready to kickstart your team?</h2>
          </div>
          <div className="home-pricing-area">
            <div className="home-pricing-wrap">
              <div className="home-pricing-price-area">
                <h3 className="pricing-standard-text">Basic</h3>
                <p>Experience and privacy Use social login.</p>
                <h3 className="home-pricing-price">$69</h3>
                <Link
                  to={"/pricing"}
                  className="gradient-button w-inline-block"
                >
                  <div className="gradient-button-area small">
                    <div>Get Started</div>
                  </div>
                </Link>
              </div>
              <div className="home-pricing-line"></div>
              <div className="home-pricing-points-area">
                <div className="home-pricing-points-wrap">
                  <div className="home-pricing-list-icon-wrap">
                    <img
                      src={HomePricingTickIcon}
                      alt="Icon"
                      className="home-pricing-list-icon-yellow"
                    />
                    <img
                      src={HomePricingTickIconDark}
                      alt="Icon"
                      className="home-pricing-list-icon-dark"
                    />
                  </div>
                  <p class="home-pricing-list-point">Single user</p>
                </div>
                <div className="home-pricing-points-wrap">
                  <div className="home-pricing-list-icon-wrap">
                    <img
                      src={HomePricingTickIcon}
                      alt="Icon"
                      className="home-pricing-list-icon-yellow"
                    />
                    <img
                      src={HomePricingTickIconDark}
                      alt="Icon"
                      className="home-pricing-list-icon-dark"
                    />
                  </div>
                  <p class="home-pricing-list-point">Personal or commercial</p>
                </div>
                <div className="home-pricing-points-wrap">
                  <div className="home-pricing-list-icon-wrap">
                    <img
                      src={HomePricingTickIcon}
                      alt="Icon"
                      className="home-pricing-list-icon-yellow"
                    />
                    <img
                      src={HomePricingTickIconDark}
                      alt="Icon"
                      className="home-pricing-list-icon-dark"
                    />
                  </div>
                  <p class="home-pricing-list-point">Business S/M accounts</p>
                </div>
                <div className="home-pricing-points-wrap">
                  <div className="home-pricing-list-icon-wrap">
                    <img
                      src={HomePricingTickIcon}
                      alt="Icon"
                      className="home-pricing-list-icon-yellow"
                    />
                    <img
                      src={HomePricingTickIconDark}
                      alt="Icon"
                      className="home-pricing-list-icon-dark"
                    />
                  </div>
                  <p class="home-pricing-list-point">Friendly support</p>
                </div>
                <div className="home-pricing-points-wrap">
                  <div className="home-pricing-list-icon-wrap">
                    <img
                      src={HomePricingTickIcon}
                      alt="Icon"
                      className="home-pricing-list-icon-yellow"
                    />
                    <img
                      src={HomePricingTickIconDark}
                      alt="Icon"
                      className="home-pricing-list-icon-dark"
                    />
                  </div>
                  <p class="home-pricing-list-point">
                    Instant transaction alerts
                  </p>
                </div>
                <div className="home-pricing-points-wrap">
                  <div className="home-pricing-list-icon-wrap">
                    <img
                      src={HomePricingTickIcon}
                      alt="Icon"
                      className="home-pricing-list-icon-yellow"
                    />
                    <img
                      src={HomePricingTickIconDark}
                      alt="Icon"
                      className="home-pricing-list-icon-dark"
                    />
                  </div>
                  <p class="home-pricing-list-point">
                    No interest or annual fee
                  </p>
                </div>
              </div>
              <div className="home-pricing-bg-shade"></div>
              <div className="home-pricing-bg"></div>
            </div>
            <div className="home-pricing-wrap">
              <div className="home-pricing-price-area">
                <h3 className="pricing-standard-text">Premium</h3>
                <p>Experience and privacy Use social login.</p>
                <h3 className="home-pricing-price">$89</h3>
                <Link
                  to={"/pricing"}
                  className="gradient-button w-inline-block"
                >
                  <div className="gradient-button-area small">
                    <div>Get Started</div>
                  </div>
                </Link>
              </div>
              <div className="home-pricing-line"></div>
              <div className="home-pricing-points-area">
                <div className="home-pricing-points-wrap">
                  <div className="home-pricing-list-icon-wrap">
                    <img
                      src={HomePricingTickIcon}
                      alt="Icon"
                      className="home-pricing-list-icon-yellow"
                    />
                    <img
                      src={HomePricingTickIconDark}
                      alt="Icon"
                      className="home-pricing-list-icon-dark"
                    />
                  </div>
                  <p class="home-pricing-list-point">Multi user</p>
                </div>
                <div className="home-pricing-points-wrap">
                  <div className="home-pricing-list-icon-wrap">
                    <img
                      src={HomePricingTickIcon}
                      alt="Icon"
                      className="home-pricing-list-icon-yellow"
                    />
                    <img
                      src={HomePricingTickIconDark}
                      alt="Icon"
                      className="home-pricing-list-icon-dark"
                    />
                  </div>
                  <p class="home-pricing-list-point">Personal or commercial</p>
                </div>
                <div className="home-pricing-points-wrap">
                  <div className="home-pricing-list-icon-wrap">
                    <img
                      src={HomePricingTickIcon}
                      alt="Icon"
                      className="home-pricing-list-icon-yellow"
                    />
                    <img
                      src={HomePricingTickIconDark}
                      alt="Icon"
                      className="home-pricing-list-icon-dark"
                    />
                  </div>
                  <p class="home-pricing-list-point">Business S/M accounts</p>
                </div>
                <div className="home-pricing-points-wrap">
                  <div className="home-pricing-list-icon-wrap">
                    <img
                      src={HomePricingTickIcon}
                      alt="Icon"
                      className="home-pricing-list-icon-yellow"
                    />
                    <img
                      src={HomePricingTickIconDark}
                      alt="Icon"
                      className="home-pricing-list-icon-dark"
                    />
                  </div>
                  <p class="home-pricing-list-point">Friendly support</p>
                </div>
                <div className="home-pricing-points-wrap">
                  <div className="home-pricing-list-icon-wrap">
                    <img
                      src={HomePricingTickIcon}
                      alt="Icon"
                      className="home-pricing-list-icon-yellow"
                    />
                    <img
                      src={HomePricingTickIconDark}
                      alt="Icon"
                      className="home-pricing-list-icon-dark"
                    />
                  </div>
                  <p class="home-pricing-list-point">
                    Instant transaction alerts
                  </p>
                </div>
                <div className="home-pricing-points-wrap">
                  <div className="home-pricing-list-icon-wrap">
                    <img
                      src={HomePricingTickIcon}
                      alt="Icon"
                      className="home-pricing-list-icon-yellow"
                    />
                    <img
                      src={HomePricingTickIconDark}
                      alt="Icon"
                      className="home-pricing-list-icon-dark"
                    />
                  </div>
                  <p class="home-pricing-list-point">
                    No interest or annual fee
                  </p>
                </div>
              </div>
              <div className="home-pricing-bg-shade"></div>
              <div className="home-pricing-bg"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="faq-section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="w-layout-grid faq-grid">
            <div>
              <div className="section-subtitle-wrap">
                <div className="section-linear-icon-wrap">
                  <div className="section-icon-wrap">
                    <img src={HomePinkQuoteIcon} alt="Icon" />
                  </div>
                </div>
                <div>Faq</div>
                <div className="section-subtitle-line violet-bg"></div>
              </div>
              <h2 className="section-title">Frequently asked questions</h2>
              <div className="faq-text-wrap">
                <p className="faq-text">
                  Asked questions about our{" "}
                  <Link to={"/services"} className="faq-text-link">
                    Services
                  </Link>{" "}
                  and offerings.
                </p>
              </div>
            </div>
            <div className="faq-whole-wrap">
              <div className="faq-wrap w-dropdown">
                <div className="faq-question-wrap first w-dropdown-toggle">
                  <div>What services do you offer?</div>
                </div>
                <nav className="faq-answer-wrap w-dropdown-list">
                  <div className="faq-answer-holder">
                    <p className="faq-answer">
                      Web design and development to digital marketing,
                      e-commerce solutions, SEO, and ongoing website
                      maintenance, we are equipped to handle various aspects of
                      your online presence.
                    </p>
                  </div>
                </nav>
              </div>
              <div className="faq-wrap w-dropdown">
                <div className="faq-question-wrap first w-dropdown-toggle">
                  <div>How much does your service cost?</div>
                </div>
                <nav className="faq-answer-wrap w-dropdown-list">
                  <div className="faq-answer-holder">
                    <p className="faq-answer">
                      The cost of our services is determined by the specific
                      requirements of your project. We take into account factors
                      such as project complexity, features, and your unique
                      needs to provide a customized quote.
                    </p>
                  </div>
                </nav>
              </div>
              <div className="faq-wrap w-dropdown">
                <div className="faq-question-wrap first w-dropdown-toggle">
                  <div>How long does it take to complete a project?</div>
                </div>
                <nav className="faq-answer-wrap w-dropdown-list">
                  <div className="faq-answer-holder">
                    <p className="faq-answer">
                      During our initial discussions, we will assess the scope
                      of work and provide you with a detailed timeline, keeping
                      you informed about key milestones and expected completion
                      dates.
                    </p>
                  </div>
                </nav>
              </div>
              <div className="faq-wrap w-dropdown">
                <div className="faq-question-wrap first w-dropdown-toggle">
                  <div>Is ongoing support included?</div>
                </div>
                <nav className="faq-answer-wrap w-dropdown-list">
                  <div className="faq-answer-holder">
                    <p className="faq-answer">
                      Our commitment is to ensure the ongoing performance,
                      security, and success of your website.
                    </p>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
