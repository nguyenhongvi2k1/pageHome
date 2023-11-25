import React from "react";
import Header from "../containers/header";
import Footer from "../containers/footer";

function homePage() {
  return (
    <div id="wrapper" className="hasbg transparent pt-24">
      <Header />
      <div className="ppb_wrapper  ">
        <div
          className="one withsmallpadding ppb_tour_search_youtube parallax withbg "
          data-jarallax-video="https://www.youtube.com/watch?v=JPe2mwq96cw"
          data-jarallax-original-styles="text-align:center;height:800px;color:#ffffff;"
          style={{ textAlign: "center", height: "800px", color: "#ffffff" }}
        >
          <div className="overlay_background"></div>
          <div className="center_wrapper">
            <div className="inner_content">
              <div className="standard_wrapper">
                <h2 className="ppb_title text-white">
                  Where do you want to go?
                </h2>
                <div className="page_tagline text-white">
                  Trips, experiences, and places. All in one service.
                </div>
                <form
                  id="tour_search_form"
                  className="tour_search_form"
                  method="get"
                  action="https://themes.themegoods.com/grandtour/demo/tours/tour-3-columns-grid/"
                >
                  <div className="tour_search_wrapper">
                    <div className="one_fourth themeborder">
                      <input
                        id="keyword"
                        name="keyword"
                        type="text"
                        autocomplete="off"
                        placeholder="Destination, city"
                      />
                      <span className="ti-search"></span>
                      <div
                        id="autocomplete"
                        className="autocomplete"
                        data-mousedown="false"
                      ></div>
                    </div>
                    <div className="one_fourth themeborder">
                      <select
                        id="month"
                        name="month"
                        style={{ color: "#555555" }}
                      >
                        <option value="">Any Month</option>
                        <option value="january">January</option>
                        <option value="february">February</option>
                        <option value="march">March</option>
                        <option value="april">April</option>
                        <option value="may">May</option>
                        <option value="june">June</option>
                        <option value="july">July</option>
                        <option value="august">August</option>
                        <option value="september">September</option>
                        <option value="october">October</option>
                        <option value="november">November</option>
                        <option value="december">December</option>
                      </select>
                      <span className="ti-calendar"></span>
                    </div>
                    <div className="one_fourth themeborder">
                      <select
                        id="sort_by"
                        name="sort_by"
                        style={{ color: "#555555" }}
                      >
                        <option value="date">Sort By Date</option>
                        <option value="price_low">Price Low to High</option>
                        <option value="price_high">Price High to Low</option>
                        <option value="name">Sort By Name</option>
                        <option value="popular">Sort By Popularity</option>
                        <option value="review">Sort By Review Score</option>
                      </select>
                      <span className="ti-exchange-vertical"></span>
                    </div>
                    <div className="one_fourth last themeborder">
                      <input
                        id="tour_search_btn"
                        type="submit"
                        className="button"
                        style={{ background: "#FF4A52" }}
                        value="Search"
                      />
                    </div>
                    <br className="clear" />
                    <div className="tour_advance_search_wrapper">
                      <div className="one_fourth themeborder">
                        <select id="tourcat" name="tourcat">
                          <option value="">All Categories</option>
                          <option value="mountain">Mountain</option>
                          <option value="rural">Rural</option>
                          <option value="snow-ice">Snow &amp; Ice</option>
                          <option value="wildlife">Wildlife</option>
                        </select>
                        <span className="ti-angle-down"></span>
                      </div>
                      <div className="one_fourth themeborder">
                        <select id="destination_id" name="destination_id">
                          <option value="">Any Destinations</option>
                          <option value="277">Tokyo</option>
                          <option value="278">Seoul</option>
                          <option value="279">Paris</option>
                          <option value="284">London</option>
                          <option value="285">Venice</option>
                          <option value="287">Miami</option>
                          <option value="289">Rome</option>
                          <option value="270">Prague</option>
                          <option value="291">California</option>
                          <option value="292">Kyoto</option>
                          <option value="293">Hong Kong</option>
                          <option value="294">Santorini</option>
                        </select>
                        <span className="ti-angle-down"></span>
                      </div>
                      <div className="one_fourth themeborder">
                        <input
                          id="budget"
                          name="budget"
                          type="text"
                          placeholder="Max budget ex. 500"
                        />
                        <span>$</span>
                      </div>
                    </div>
                  </div>
                  <div className="tour_advance_search_wrapper_link">
                    <a
                      id="tour_advance_search_toggle"
                      href="javascript:;"
                      className="text-white"
                    >
                      <span className="icon ti-angle-down"></span>Advanced
                      Search
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div
            id="jarallax-container-0"
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "100%",
              height: "100%",
              overflow: "hidden",
              zIndex: "-100",
            }}
          >
            <div
              style={{
                backgroundPosition: " 50% 50%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundImage:
                  "url(&quot;https://img.youtube.com/vi/JPe2mwq96cw/maxresdefault.jpg&quot;)",
                position: "fixed",
                top: "0px",
                left: " 0px",
                width: "1905px",
                height: "588px",
                overflow: "hidden",
                pointerEvents: "none",
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
                willChange: "transform, opacity",
                marginTop: "-106px",
                transform: "translate3d(0px, 46px, 0px)",
                display: "block",
              }}
            ></div>
            <iframe
              id="VideoWorker-0"
              frameborder="0"
              allowfullscreen=""
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              title="Spectacular Norway - from the air"
              width="640"
              height="360"
              src="https://www.youtube.com/embed/JPe2mwq96cw?autohide=1&amp;rel=0&amp;autoplay=0&amp;playsinline=1&amp;iv_load_policy=3&amp;modestbranding=1&amp;controls=0&amp;showinfo=0&amp;disablekb=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fthemes.themegoods.com&amp;widgetid=1"
              style={{
                position: "fixed",
                inset: "0px",
                width: "1040px",
                height: "985px",
                maxWidth: "none",
                maxHeight: "none",
                margin: "-307.5px 0px 0px -47.5px",
                zIndex: "-1",
                transform: "translate3d(0px, 107.5px, 0px)",
              }}
            ></iframe>
          </div>
        </div>
      </div>
      <div
        className="one withsmallpadding ppb_header "
        style={{
          textAlign: "center",
          padding: "0px 0 0px 0",
          marginTop: "70px",
        }}
      >
        <div className="standard_wrapper">
          <div className="page_content_wrapper">
            <div className="inner">
              <div style={{ margin: "auto", width: "100%" }}>
                <h2 className="ppb_title">Popular Destinations</h2>
                <div className="page_tagline">
                  World's best tourist destinations
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="ppb_destination_grid one nopadding "
        style={{ marginTop: "50px", marginBottom: "50px" }}
      >
        <div className="page_content_wrapper page_main_content sidebar_content full_width fixed_column">
          <div className="standard_wrapper">
            <div
              id="1661063935993441063"
              className="portfolio_filter_wrapper gallery grid portrait four_cols"
              data-columns="4"
            >
              <div className="element grid baseline classic4_cols animated1">
                <div
                  data-bg="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Tokyo_Dollarphotoclub_72848283-copy-700x466.jpg"
                  className="one_fourth gallery4 grid static filterable portfolio_type themeborder rocket-lazyload entered lazyloaded"
                  style={{backgroundImage: 'url("https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Tokyo_Dollarphotoclub_72848283-copy-700x466.jpg")'}}
                  data-ll-status="loaded"
                >
                  <a
                    className="tour_image"
                    href="https://themes.themegoods.com/grandtour/demo/destination/tokyo/"
                  ></a>
                  <div className="portfolio_info_wrapper">
                    <div className="portfolio_info_content">
                      <h3>Tokyo</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="element grid baseline classic4_cols animated2">
                <div
                  data-bg="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/bf1202aedf2c5b6a57d379575619a488-700x466.jpg"
                  className="one_fourth gallery4 grid static filterable portfolio_type themeborder rocket-lazyload entered lazyloaded"
                  style={{backgroundImage: 'url("https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/bf1202aedf2c5b6a57d379575619a488-700x466.jpg")'}}
                  data-ll-status="loaded"
                >
                  <a
                    className="tour_image"
                    href="https://themes.themegoods.com/grandtour/demo/destination/seoul/"
                  ></a>
                  <div className="portfolio_info_wrapper">
                    <div className="portfolio_info_content">
                      <h3>Seoul</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="element grid baseline classic4_cols animated3">
                <div
                  data-bg="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/1600x1200-4-700x466.jpg"
                  className="one_fourth gallery4 grid static filterable portfolio_type themeborder rocket-lazyload entered lazyloaded"
                  style={{backgroundImage: 'url("https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/1600x1200-4-700x466.jpg")'}}
                  data-ll-status="loaded"
                >
                  <a
                    className="tour_image"
                    href="https://themes.themegoods.com/grandtour/demo/destination/paris/"
                  ></a>
                  <div className="portfolio_info_wrapper">
                    <div className="portfolio_info_content">
                      <h3>Paris</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="element grid baseline classic4_cols animated4">
                <div
                  data-bg="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-1-700x466.jpg"
                  className="one_fourth gallery4 grid static filterable portfolio_type themeborder rocket-lazyload entered lazyloaded"
                  style={{backgroundImage: 'url("https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-1-700x466.jpg")'}}
                  data-ll-status="loaded"
                >
                  <a
                    className="tour_image"
                    href="https://themes.themegoods.com/grandtour/demo/destination/london/"
                  ></a>
                  <div className="portfolio_info_wrapper">
                    <div className="portfolio_info_content">
                      <h3>London</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="one withsmallpadding ppb_header "
        style={{
          textAlign: "center",
          padding: "0px 0 0px 0",
          marginTop: "10px",
          marginBottom: "50px",
        }}
      >
        <div className="standard_wrapper">
          <div className="page_content_wrapper">
            <div className="inner">
              <div style={{ margin: "auto", width: "100%" }}>
                <h2 className="ppb_title">Best Value Trips</h2>
                <div className="page_tagline">Best offers trips from us</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="ppb_tour_classic one nopadding "
        style={{ marginBottom: "50px" }}
      >
        <div className="page_content_wrapper page_main_content sidebar_content full_width fixed_column">
          <div className="standard_wrapper">
            <div
              id="166106393567185126"
              className="portfolio_filter_wrapper gallery classic three_cols"
              data-columns="3"
            >
              <div className="element grid classic3_cols animated1">
                <div className="one_third gallery3 classic static filterable portfolio_type themeborder">
                  <a
                    className="tour_image"
                    href="https://themes.themegoods.com/grandtour/demo/tour/french-autumn/"
                  >
                    <img
                      width="700"
                      height="466"
                      src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-211051-700x466.jpeg"
                      alt="French Autumn"
                      data-lazy-src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-211051-700x466.jpeg"
                      data-ll-status="loaded"
                      className="entered lazyloaded"
                    />
                    <noscript>
                      <img
                        width="700"
                        height="466"
                        src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-211051-700x466.jpeg"
                        alt="French Autumn"
                      />
                    </noscript>
                    <div className="tour_price ">$5,000</div>
                  </a>
                  <div className="portfolio_info_wrapper">
                    <a
                      className="tour_link"
                      href="https://themes.themegoods.com/grandtour/demo/tour/french-autumn/"
                    >
                      <h4>French Autumn</h4>
                    </a>
                    <div className="tour_excerpt">
                      <p>City Tours, Urban</p>
                    </div>
                    <div className="tour_attribute_wrapper">
                      <div className="tour_attribute_rating">
                        <div className="br-theme-fontawesome-stars-o">
                          <div className="br-widget">
                            <a href="javascript:;" className="br-selected"></a>
                            <a href="javascript:;" className="br-selected"></a>
                            <a href="javascript:;" className="br-selected"></a>
                            <a href="javascript:;" className="br-selected"></a>
                            <a href="javascript:;"></a>
                          </div>
                        </div>
                        <div className="tour_attribute_rating_count">
                          4&nbsp;reviews
                        </div>
                      </div>
                      <div className="tour_attribute_days">
                        <span className="ti-time"></span>5&nbsp;days
                      </div>
                    </div>
                    <br className="clear" />
                  </div>
                </div>
              </div>
              <div className="element grid classic3_cols animated2">
                <div className="one_third gallery3 classic static filterable portfolio_type themeborder">
                  <a
                    className="tour_image"
                    href="https://themes.themegoods.com/grandtour/demo/tour/grand-switzerland/"
                  >
                    <img
                      width="700"
                      height="466"
                      src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-197657-700x466.jpeg"
                      alt="Grand Switzerland"
                      data-lazy-src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-197657-700x466.jpeg"
                      data-ll-status="loaded"
                      className="entered lazyloaded"
                    />
                    <noscript>
                      <img
                        width="700"
                        height="466"
                        src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-197657-700x466.jpeg"
                        alt="Grand Switzerland"
                      />
                    </noscript>
                    <div className="tour_price ">$6,000</div>
                  </a>
                  <div className="portfolio_info_wrapper">
                    <a
                      className="tour_link"
                      href="https://themes.themegoods.com/grandtour/demo/tour/grand-switzerland/"
                    >
                      <h4>Grand Switzerland</h4>
                    </a>
                    <div className="tour_excerpt">
                      <p>Shopping, Mountain, Snow &amp; Ice</p>
                    </div>
                    <div className="tour_attribute_wrapper">
                      <div className="tour_attribute_rating">
                        <div className="br-theme-fontawesome-stars-o">
                          <div className="br-widget">
                            <a href="javascript:;" className="br-selected"></a>
                            <a href="javascript:;" className="br-selected"></a>
                            <a href="javascript:;" className="br-selected"></a>
                            <a href="javascript:;" className="br-selected"></a>
                            <a href="javascript:;"></a>
                          </div>
                        </div>
                        <div className="tour_attribute_rating_count">
                          4&nbsp;reviews
                        </div>
                      </div>
                      <div className="tour_attribute_days">
                        <span className="ti-time"></span>6&nbsp;days
                      </div>
                    </div>
                    <br className="clear" />
                  </div>
                </div>
              </div>
              <div className="element grid classic3_cols animated3">
                <div className="one_third gallery3 classic static filterable portfolio_type themeborder">
                  <a
                    className="tour_image"
                    href="https://themes.themegoods.com/grandtour/demo/tour/discover-japan/"
                  >
                    <img
                      width="700"
                      height="466"
                      src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-96420-700x466.jpeg"
                      alt="Discover Japan"
                      data-lazy-src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-96420-700x466.jpeg"
                      data-ll-status="loaded"
                      className="entered lazyloaded"
                    />
                    <noscript>
                      <img
                        width="700"
                        height="466"
                        src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-96420-700x466.jpeg"
                        alt="Discover Japan"
                      />
                    </noscript>
                    <div className="tour_label">Sale</div>
                    <div className="tour_price has_discount">
                      <span className="normal_price">$3,000</span>$2,500
                    </div>
                  </a>
                  <div className="portfolio_info_wrapper">
                    <a
                      className="tour_link"
                      href="https://themes.themegoods.com/grandtour/demo/tour/discover-japan/"
                    >
                      <h4>Discover Japan</h4>
                    </a>
                    <div className="tour_excerpt">
                      <p>City Tours, Iconic</p>
                    </div>
                    <div className="tour_attribute_wrapper">
                      <div className="tour_attribute_rating">
                        <div className="br-theme-fontawesome-stars-o">
                          <div className="br-widget">
                            <a href="javascript:;" className="br-selected"></a>
                            <a href="javascript:;" className="br-selected"></a>
                            <a href="javascript:;" className="br-selected"></a>
                            <a href="javascript:;" className="br-selected"></a>
                            <a href="javascript:;"></a>
                          </div>
                        </div>
                        <div className="tour_attribute_rating_count">
                          4&nbsp;reviews
                        </div>
                      </div>
                      <div className="tour_attribute_days">
                        <span className="ti-time"></span>5&nbsp;days
                      </div>
                    </div>
                    <br className="clear" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="one withsmallpadding ppb_header "
        style={{
          textAlign: "center",
          padding: "0px 0 0px 0",
          marginBottom: "40px",
        }}
      >
        <div className="standard_wrapper">
          <div className="page_content_wrapper">
            <div className="inner">
              <div style={{ margin: "auto", width: "100%" }}>
                <h2 className="ppb_title">Why Choose Us</h2>
                <div className="page_tagline">
                  Here are reasons you should plan trip with us
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="standard_wrapper">
        <div
          className="one_third withsmallpadding ppb_text"
          style={{
            textAlign: "center",
            padding: "0px 0 0px 0",
            marginBottom: "70px",
          }}
        >
          <div className="standard_wrapper">
            <div className="page_content_wrapper">
              <div className="inner">
                <div style={{ margin: "auto", width: "100%" }}>
                  <p>
                    <img
                      className="alignnone wp-image-3106 size-medium entered lazyloaded"
                      src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Map-Marker-300x300.png"
                      width="150"
                      height="150"
                      alt=""
                      data-lazy-src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Map-Marker-300x300.png"
                      data-ll-status="loaded"
                    />
                    <noscript>
                      <img
                        className="alignnone wp-image-3106 size-medium"
                        src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Map-Marker-300x300.png"
                        width="150"
                        height="150"
                        alt=""
                      />
                    </noscript>
                  </p>
                  <h4 className="p1">
                    <span className="s1">
                      <b>Handpicked Hotels</b>
                    </span>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean
                    commodo ligula eget dolor. Aenean massa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="standard_wrapper">
        <div
          className="one_third withsmallpadding ppb_text"
          style={{
            textAlign: "center",
            padding: "0px 0 0px 0",
            marginBottom: "70px",
          }}
        >
          <div className="standard_wrapper">
            <div className="page_content_wrapper">
              <div className="inner">
                <div style={{ margin: "auto", width: "100%" }}>
                  <p>
                    <img
                      className="alignnone wp-image-3107 size-medium entered lazyloaded"
                      src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Worldwide-Location-300x300.png"
                      width="150"
                      height="150"
                      alt=""
                      data-lazy-src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Worldwide-Location-300x300.png"
                      data-ll-status="loaded"
                    />
                    <noscript>
                      <img
                        className="alignnone wp-image-3107 size-medium"
                        src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Worldwide-Location-300x300.png"
                        width="150"
                        height="150"
                        alt=""
                      />
                    </noscript>
                  </p>
                  <h4 className="p1">
                    <span className="s1">
                      <b>World Class Service</b>
                    </span>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean
                    commodo ligula eget dolor. Aenean massa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="standard_wrapper">
        <div
          className="one_third last withsmallpadding ppb_text"
          style={{
            textAlign: "center",
            padding: "0px 0 0px 0",
            marginBottom: "70px",
          }}
        >
          <div className="standard_wrapper">
            <div className="page_content_wrapper">
              <div className="inner">
                <div style={{ margin: "auto", width: "100%" }}>
                  <p>
                    <img
                      className="alignnone wp-image-3108 size-medium entered lazyloaded"
                      src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Hot-Air-Balloon-300x300.png"
                      width="140"
                      height="140"
                      alt=""
                      data-lazy-src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Hot-Air-Balloon-300x300.png"
                      data-ll-status="loaded"
                    />
                    <noscript>
                      <img
                        className="alignnone wp-image-3108 size-medium"
                        src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Hot-Air-Balloon-300x300.png"
                        width="140"
                        height="140"
                        alt=""
                      />
                    </noscript>
                  </p>
                  <h4 className="p1">
                    <span className="s1">
                      <b>Best Price Guarantee</b>
                    </span>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean
                    commodo ligula eget dolor. Aenean massa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-bg="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24377.jpg"
        className="parallax rocket-lazyload entered lazyloaded"
        style={{height: '60vh', backgroundImage: 'url("https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24377.jpg")'}}
        data-ll-status="loaded"
      ></div>
      <div
        className="one withsmallpadding ppb_header "
        style={{textAlign:'center',padding:'0px 0 0px 0',marginTop:'70px',marginBottom:'50px'}}
      >
        <div className="standard_wrapper">
          <div className="page_content_wrapper">
            <div className="inner">
              <div style={{ margin: "auto", width: "100%" }}>
                <h2 className="ppb_title">Articles &amp; Tips</h2>
                <div className="page_tagline">
                  Explore some of the best tips from around the world
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="standard_wrapper">
        <div
          className="ppb_blog_grid one nopadding"
          style={{padding:'0px 0 0px 0',marginBottom:'50px'}}
        >
          <div className="page_content_wrapper">
            <div className="inner">
              <div className="inner_wrapper">
                <div className="blog_grid_wrapper sidebar_content full_width ppb_blog_posts">
                  <div
                    id="post-81"
                    className="post type-post hentry status-publish "
                  >
                    <div className="post_wrapper grid_layout">
                      <div className="post_img small static">
                        <a href="https://themes.themegoods.com/grandtour/demo/my-memorial-day-tribute-to-someone-who-told-me-to-travel/">
                          <img
                            width="960"
                            height="636"
                            src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/photo-1469920783271-4ee08a94d42d-960x636.jpg"
                            alt="Memorial Day to Someone Told Me to Travel"
                            className="entered lazyloaded"
                            data-lazy-src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/photo-1469920783271-4ee08a94d42d-960x636.jpg"
                            data-ll-status="loaded"
                          />
                          <noscript>
                            <img
                              width="960"
                              height="636"
                              src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/photo-1469920783271-4ee08a94d42d-960x636.jpg"
                              alt="Memorial Day to Someone Told Me to Travel"
                              className=""
                            />
                          </noscript>
                        </a>
                      </div>
                      <div className="post_header_wrapper">
                        <div className="post_header grid">
                          <div className="post_detail single_post">
                            <span className="post_info_date">
                              <a
                                href="https://themes.themegoods.com/grandtour/demo/my-memorial-day-tribute-to-someone-who-told-me-to-travel/"
                                title="Memorial Day to Someone Told Me to Travel"
                              >
                                December 10, 2016
                              </a>
                            </span>
                          </div>
                          <h6>
                            <a
                              href="https://themes.themegoods.com/grandtour/demo/my-memorial-day-tribute-to-someone-who-told-me-to-travel/"
                              title="Memorial Day to Someone Told Me to Travel"
                            >
                              Memorial Day to Someone Told Me to Travel
                            </a>
                          </h6>
                        </div>
                        <p>
                          Meh synth Schlitz, tempor duis single-origin coffee ea
                          next level ethnic fingerstache...
                        </p>
                        <div className="post_button_wrapper">
                          <a
                            className="readmore"
                            href="https://themes.themegoods.com/grandtour/demo/my-memorial-day-tribute-to-someone-who-told-me-to-travel/"
                          >
                            Read More<span className="ti-angle-right"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="post-76"
                    className="post type-post hentry status-publish "
                  >
                    <div className="post_wrapper grid_layout">
                      <div className="post_img small static">
                        <a href="https://themes.themegoods.com/grandtour/demo/7-tips-for-nomads-on-a-budget/">
                          <img
                            width="960"
                            height="636"
                            src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-212388-960x636.jpeg"
                            alt="7 Tips For Nomads On A Budget Trips"
                            className="entered lazyloaded"
                            data-lazy-src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-212388-960x636.jpeg"
                            data-ll-status="loaded"
                          />
                          <noscript>
                            <img
                              width="960"
                              height="636"
                              src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-212388-960x636.jpeg"
                              alt="7 Tips For Nomads On A Budget Trips"
                              className=""
                            />
                          </noscript>
                        </a>
                      </div>
                      <div className="post_header_wrapper">
                        <div className="post_header grid">
                          <div className="post_detail single_post">
                            <span className="post_info_date">
                              <a
                                href="https://themes.themegoods.com/grandtour/demo/7-tips-for-nomads-on-a-budget/"
                                title="7 Tips For Nomads On A Budget Trips"
                              >
                                December 10, 2016
                              </a>
                            </span>
                          </div>
                          <h6>
                            <a
                              href="https://themes.themegoods.com/grandtour/demo/7-tips-for-nomads-on-a-budget/"
                              title="7 Tips For Nomads On A Budget Trips"
                            >
                              7 Tips For Nomads On A Budget Trips
                            </a>
                          </h6>
                        </div>
                        <p>
                          Meh synth Schlitz, tempor duis single-origin coffee ea
                          next level ethnic fingerstache...
                        </p>
                        <div className="post_button_wrapper">
                          <a
                            className="readmore"
                            href="https://themes.themegoods.com/grandtour/demo/7-tips-for-nomads-on-a-budget/"
                          >
                            Read More<span className="ti-angle-right"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="post-72"
                    className="post type-post hentry status-publish last"
                  >
                    <div className="post_wrapper grid_layout">
                      <div className="post_img small static">
                        <a href="https://themes.themegoods.com/grandtour/demo/taking-a-travel-blog-victory-lap/">
                          <img
                            width="960"
                            height="636"
                            src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24484-960x636.jpg"
                            alt="Taking A Travel Blog Victory Lap"
                            className="entered lazyloaded"
                            data-lazy-src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24484-960x636.jpg"
                            data-ll-status="loaded"
                          />
                          <noscript>
                            <img
                              width="960"
                              height="636"
                              src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24484-960x636.jpg"
                              alt="Taking A Travel Blog Victory Lap"
                              className=""
                            />
                          </noscript>
                        </a>
                      </div>
                      <div className="post_header_wrapper">
                        <div className="post_header grid">
                          <div className="post_detail single_post">
                            <span className="post_info_date">
                              <a
                                href="https://themes.themegoods.com/grandtour/demo/taking-a-travel-blog-victory-lap/"
                                title="Taking A Travel Blog Victory Lap"
                              >
                                December 10, 2016
                              </a>
                            </span>
                          </div>
                          <h6>
                            <a
                              href="https://themes.themegoods.com/grandtour/demo/taking-a-travel-blog-victory-lap/"
                              title="Taking A Travel Blog Victory Lap"
                            >
                              Taking A Travel Blog Victory Lap
                            </a>
                          </h6>
                        </div>
                        <p>
                          Meh synth Schlitz, tempor duis single-origin coffee ea
                          next level ethnic fingerstache...
                        </p>
                        <div className="post_button_wrapper">
                          <a
                            className="readmore"
                            href="https://themes.themegoods.com/grandtour/demo/taking-a-travel-blog-victory-lap/"
                          >
                            Read More<span className="ti-angle-right"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default homePage;
