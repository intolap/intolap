import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer-section bg-dark">
        {/* <div className="footer-top space">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6 footer-brand">
                        <div className="brand-header">
                            <a href="/" className="footer-logo d-block mb-20"><img src="/assets/images/logo/logo-2.png" alt="" /></a>
                            <p className="text">Credibly harness client-centric opportunities <br/> with prospective bandwidth</p>
                        </div>
                        <div className="footer-social">
                            <a href="https://www.facebook.com/" className="social-link">FB.</a>
                            <a href="https://x.com/" className="social-link">TW.</a>
                            <a href="https://www.linkedin.com/" className="social-link">LN.</a>
                            <a href="https://www.instagram.com/" className="social-link">IG</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 p-0 sm-pl-15">
                                <div className="footer-widget">
                                    <h4 className="title">Company</h4>
                                    <ul className="list-unstyled">
                                        <li><Link to="/about">Who we are</Link></li>
                                        <li><Link to="/service">Our Services</Link></li>
                                        <li><Link to="/team">Meet our Team</Link></li>
                                        <li><Link to="/blog">Latest Blog</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 p-0 sm-pl-15">
                                <div className="footer-widget">
                                    <h4 className="title">Service Link</h4>
                                    <ul className="list-unstyled">
                                        <li><Link to="/service/service-details">Business Consult.</Link></li>
                                        <li><Link to="/service/service-details">Finance Const</Link></li>
                                        <li><Link to="/service/service-details">Marketing Strategy</Link></li>
                                        <li><Link to="/service/service-details">Advisor Const.</Link></li>
                                        <li><Link to="/service/service-details">Insurance Const.</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1 md-d-none"></div>
                    <div className="col-lg-3 col-md-4">
                        <div className="footer-widget ml-0 mb-0">
                            <h4 className="title">Newsletter</h4>
                            <p className="text">Don’t miss the latest news</p>
                            <form className="newsletter-form" action="https://formspree.io/f/mzbnjrnb" method="post">
                                <div className="form-group">
                                    <input type="email" name="email" className="email" placeholder="Email Address" autoComplete="on"  />
                                    <button type="submit">
                                    <i className="bi bi-send"></i>
                                        <span className="btn-title"></span>
                                    </button>
                                </div>
                            </form>
                            <div className="notify"><div className="icon"><i className="bi bi-bell"></i></div> Please sign up for notify any updates</div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        <div className="footer-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p className="mb-0">&copy;2015-2026 - INTOLAP</p>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <div className="footer-policy">
                            <a href="/privacy">Privacy Policy</a>
                            <a href="/legal">Legal</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer;