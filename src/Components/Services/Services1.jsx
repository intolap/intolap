import { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
const Services1 = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 766,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    const sliderRef = useRef(null);

    const next = () => {
        sliderRef.current.slickNext();
    };

    const previous = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <section className="service-section overflow-hidden" id="brands">
            <div className="p-top-left wow slideInLeft"><img src="/assets/images/service/shape01.png" alt="Service shape" /></div>
            <div className="container space">
                <div className="row align-items-center gy-30">
                    <div className="col-lg-4 col-md-6">
                        <div className="service-content-wrap">
                            <div className="title-area two white">
                                <div className="sub-title">
                                    <span><i className="asterisk"></i></span>Our Ventures
                                </div>
                                <div className="title-wrap">
                                    {/* <h2 className="sec-title">Providing the best <br/> <span className="bold"><span className="text-theme2">digital</span> agency</span> <br/> solutions</h2> */}
                                    <h2 className="sec-title">Innovative Businesses <br /> <span className="bold"><span className="text-theme2">Under One Vision</span> </span> </h2>
                                    <p className="sec-text">Driving innovation and sustainable growth across diverse sectors with strategic expertise and cutting-edge solutions.</p>
                                </div>
                            </div>
                            <div className="service-btn-wrapper">
                                <div className="array-button">
                                    <button onClick={previous} className="array-prev"><i className="bi bi-arrow-left"></i></button>
                                    <button onClick={next} className="array-next active"><i className="bi bi-arrow-right"></i></button>
                                </div>
                                <div className="service-btn">
                                    {/* <Link to="/service">ALL BRANDS +</Link> */}
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-8 col-md-6">
                        <div className="service-slider swiper">
                            <div className="swiper-wrapper cs_slider_gap_301">
                                <Slider ref={sliderRef} {...settings}>
                                    <div className="swiper-slide">
                                        <div className="service-single-box bg-theme2">
                                            <div className="inner-box">
                                                <div className="icon"><i className="bi bi-power"></i></div>
                                                <div className="border mt-50 xs-mt-40 mb-30"></div>
                                                <h4 className="title">INTOLAP</h4>
                                                <p className="text">Delivers cutting-edge IT development services, seamlessly integrating personalized functionalities and driving long-term impact with innovation.</p>
                                                <Link to="https://intolap.com" className="theme-btn service-btn">
                                                    <i className="bi bi-plus-lg"></i>
                                                    <span className="link-text">View Details</span>
                                                </Link>
                                                <span className="serial">Information Technology</span>
                                                <div className="p-bottom-right wow slideInRight" data-wow-delay="500ms">
                                                    <img src="/assets/images/service/box-shape.png" alt="Service shape" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="swiper-slide">
                                        <div className="service-single-box white bg-theme">
                                            <div className="inner-box">
                                                <div className="icon"><i className="bi bi-puzzle"></i></div>
                                                <div className="border mt-50 xs-mt-40 mb-30"></div>
                                                <h4 className="title">CMSPRESS</h4>
                                                <p className="text">A comprehensive headless CMS, offering seamless integration, scalability, and flexibility. It empowers businesses with dynamic content management.</p>
                                                <Link to="https://cmspress.intolap.com" className="theme-btn service-btn">
                                                    <i className="bi bi-plus-lg"></i>
                                                    <span className="link-text">View Details</span>
                                                </Link>
                                                <span className="serial">CMS</span>
                                                <div className="p-top-right wow slideInRight" data-wow-delay="700ms">
                                                    <img src="/assets/images/service/box-shape02.png" alt="Service shape" />
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="swiper-slide">
                                        <div className="service-single-box bg-theme2">
                                            <div className="inner-box">
                                                <div className="icon"><i className="bi bi-power"></i></div>
                                                <div className="border mt-50 xs-mt-40 mb-30"></div>
                                                <h4 className="title">LaunchMeLoud</h4>
                                                <p className="text">Dynamic startup platform offering innovative tools, expert support, and strategic guidance to help businesses grow, and succeed in competitive market.</p>
                                                <Link to="https://launchmeloud.com" className="theme-btn service-btn">
                                                    <i className="bi bi-plus-lg"></i>
                                                    <span className="link-text">View Details</span>
                                                </Link>
                                                <span className="serial">Advertising & Marketing</span>
                                                <div className="p-bottom-right wow slideInRight" data-wow-delay="500ms">
                                                    <img src="/assets/images/service/box-shape.png" alt="Service shape" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="service-single-box white bg-theme">
                                            <div className="inner-box">
                                                <div className="icon"><i className="bi bi-puzzle"></i></div>
                                                <div className="border mt-50 xs-mt-40 mb-30"></div>
                                                <h4 className="title">Deviya Lifestyles</h4>
                                                <p className="text">Blending craftsmanship, creativity, and elegance, Deviya offers handcrafted chocolates and lifestyle gifts that bring joy, connection, and lasting impressions.</p>
                                                <Link to="https://deviya.in" className="theme-btn service-btn">
                                                    <i className="bi bi-plus-lg"></i>
                                                    <span className="link-text">View Details</span>
                                                </Link>
                                                <span className="serial">Luxury Gifts & Lifestyle</span>
                                                <div className="p-top-right wow slideInRight" data-wow-delay="700ms">
                                                    <img src="/assets/images/service/box-shape02.png" alt="Service shape" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="service-contact">
                            <div className="social-proof">
                                <div className="social">
                                    <img src="/assets/images/service/social-img01.jpg" alt="Client 01" />
                                    <img src="/assets/images/service/social-img02.jpg" alt="Client 02" />
                                </div>
                                <p className="text">Partner with us to transform your vision into reality.</p>
                            </div>
                            <div className="contact-btn">
                                <Link to="/contact" className="theme-btn">
                                    <span className="link-effect">
                                        <span className="effect-1">Contact Us Now</span>
                                        <span className="effect-1">Contact Us Now</span>
                                    </span><i className="bi bi-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Services1;