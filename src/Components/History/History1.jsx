import { Link } from "react-router-dom";

const History1 = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        console.log(element)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="mission-section space bg-white">
            <div className="container">
                <div className="title-area three text-center">
                    <div className="sub-title"><span><i className="asterisk"></i></span>MOTO</div>
                    <h2 className="sec-title">Company mission and <span className="bold">vision</span></h2>
                </div>
                <div className="row gy-30">
                    <div className="col-lg-6 col-md-6 wow fadeInLeft">
                        <div className="mission-single-box bg-theme3">
                            <div className="p-top-right wow slideInRight"><img src="/assets/images/mission/shape01.png" alt="Mission shape" /></div>
                            <div className="mission-content">
                                <h3 className="title">Our mission to top <br />success</h3>
                                <p className="text">At INTOLAP, we strive to set new industry standards by delivering cutting-edge, scalable, and impactful solutions that enable brands to thrive in a dynamic world.</p>
                                <Link to="#process" onClick={() => scrollToSection("process")} className="theme-btn bg-transparent">
                                    <span className="link-effect">
                                        <span className="effect-1">Our Process</span>
                                        <span className="effect-1">Our Process</span>
                                    </span><i className="bi bi-arrow-down"></i>
                                </Link>
                            </div>
                            <div className="mission-image p-bottom-right">
                                {/* <img src="/assets/images/mission/img01.png" alt="Mission Image 1" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 wow fadeInRight">
                        <div className="mission-single-box bg-light2">
                            <div className="p-top-right wow slideInRight"><img src="/assets/images/mission/shape02.png" alt="Mission shape" /></div>
                            <div className="mission-content">
                                <h3 className="title">Our Vision for <br />Achieving Success</h3>
                                <p className="text">Credibly administrate robust resource intellectually. Credibly brand the market positioning.</p>
                                <Link to="#process" onClick={() => scrollToSection("process")} className="theme-btn bg-transparent">
                                    <span className="link-effect">
                                        <span className="effect-1">Our Process</span>
                                        <span className="effect-1">Our Process</span>
                                    </span><i className="bi bi-arrow-down"></i>
                                </Link>
                            </div>
                            <div className="mission-image p-bottom-right">
                                {/* <img src="/assets/images/mission/img02.png" alt="Mission Image 1" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default History1;