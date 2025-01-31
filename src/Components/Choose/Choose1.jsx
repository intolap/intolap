import { Link } from "react-router-dom";

const Choose1 = () => {
    return (
        <section className="choose-section space bg-theme3 overflow-hidden">
            <div className="p-top-right wow slideInRight"><img src="/assets/images/choose/shape01.png" alt="Choose shape" /></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 position-relative">
                        <div className="choose-thumb">
                            <img src="/assets/images/choose/choose01.jpg" alt="Choose Thumb" />
                        </div>
                        <div className="since-box">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <span className="icon"><i className="bi bi-compass"></i></span>
                                </div>
                                <h5 className="since">SINCE 2007</h5>
                                <div className="text">Providing marketing solutions client satisfaction</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="choose-content-wrapper">
                            <div className="title-area two">
                                <div className="sub-title"><span><i className="asterisk"></i></span>Why Bentol</div>
                                <h2 className="sec-title">We make the most creative <br /> <span className="bold">digital</span> solutions</h2>
                                <p className="sec-text text-gray">Collaboratively supply bricks-and-clicks metrics for maintainable users reinvent unique value for just in time consult.</p>
                            </div>
                            <div className="feature-grid">
                                <div className="feature-item">
                                    <span className="checkmark"><i className="bi bi-check-lg"></i></span>
                                    <p>Most powerful and expert team</p>
                                </div>
                                <div className="feature-item">
                                    <span className="checkmark"><i className="bi bi-check-lg"></i></span>
                                    <p>Data-driven insights for consulting</p>
                                </div>
                            </div>
                            <div className="py-25"><div className="border"></div></div>
                            <div className="feature-grid">
                                <div className="feature-item">
                                    <span className="checkmark"><i className="bi bi-check-lg"></i></span>
                                    <p>Innovative strategies for business</p>
                                </div>
                                <div className="feature-item">
                                    <span className="checkmark"><i className="bi bi-check-lg"></i></span>
                                    <p>Client-centric approach to marketing</p>
                                </div>
                            </div>
                            <Link to="/team" className="theme-btn bg-dark mt-35">
                                <span className="link-effect">
                                    <span className="effect-1">Meet Our Team</span>
                                    <span className="effect-1">Meet Our Team</span>
                                </span><i className="bi bi-arrow-up-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Choose1;