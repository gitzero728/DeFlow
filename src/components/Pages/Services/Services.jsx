/* src/components/Pages/Services/Services.jsx */
import React from "react";
import { Link } from "react-router-dom";
import AnimateBottomToTop from "../../Effect/AnimateBottomToTop/AnimateBottomToTop.jsx";
import {
  ServicesBackgroundImage1,
  ServicesBackgroundImage2,
  ServicesBackgroundImage3,
  ServicesBackgroundImage4,
  ServicesBackgroundImage5,
  ServicesBackgroundImage6,
} from "../../../assets/images";

const Services = () => {
  return (
    <div>
      <AnimateBottomToTop>
        <section className="service-section">
          <div className="w-layout-blockcontainer container w-container">
            <div className="service-banner-title-wrap animate-bottom-to-top">
              <div className="align-center">
                <h1 className="banner-title bright">
                  A New dimension through surveying.
                </h1>
              </div>
            </div>
            <div className="service-wrap">
              <div className="w-dyn-list animate-bottom-to-top">
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
              <div className="service-card-wrap animate-bottom-to-top">
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
                              World of code-related development, where
                              creativity &amp; logic converge to build the
                              foundation of our digital future.
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
              <div className="w-dyn-list animate-bottom-to-top">
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
              <div className="service-card-wrap animate-bottom-to-top">
                <div className="w-dyn-list">
                  <div className="w-dyn-items w-row">
                    <div className="w-dyn-item w-col w-col-6">
                      <div className="service-card">
                        <div className="service-content-wrap">
                          <Link
                            to={"/services/multi-faceted-bundles"}
                            className="service-card-title"
                          >
                            Multi-faceted Bundles
                          </Link>
                          <div className="service-content-area">
                            <p>
                              Synergy of services, each playing a crucial role
                              in shaping a holistic strategy for your success.
                            </p>
                          </div>
                          <div className="section-card-button-wrap">
                            <Link
                              to={"/services/multi-faceted-bundles"}
                              className="gradient-button w-inline-block"
                            >
                              <div className="gradient-button-area small">
                                <div>Read More</div>
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div className="service-card-image-wrap">
                          <img
                            src={ServicesBackgroundImage5}
                            alt=""
                            className="service-image"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-dyn-item w-col w-col-6">
                      <div className="service-card">
                        <div className="service-content-wrap">
                          <Link
                            to={"/services/visual-crafting"}
                            className="service-card-title"
                          >
                            Visual Crafting
                          </Link>
                          <div className="service-content-area">
                            <p>
                              In a meticulously crafted world, your brand's
                              visual identity ensures unparalleled success and
                              lasting impact.
                            </p>
                          </div>
                          <div className="section-card-button-wrap">
                            <Link
                              to={"/services/visual-crafting"}
                              className="gradient-button w-inline-block"
                            >
                              <div className="gradient-button-area small">
                                <div>Read More</div>
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div className="service-card-image-wrap">
                          <img
                            src={ServicesBackgroundImage6}
                            alt=""
                            className="service-image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimateBottomToTop>
    </div>
  );
};
export default Services;
