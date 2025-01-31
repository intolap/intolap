
const ContactInfo1 = () => {
    return (
<section className="contact-section space bg-white">
            <div className="p-top-left wow slideInLeft"><img src="/assets/images/contact/shape01.png" alt="Service shape" /></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="appointment-form">
                            <div className="header">
                                <h2 className="title">Make an Appointment</h2>
                                <span className="availability">(24/7 available)</span>
                            </div>
                            <form id="appointment_form" className="appointment-form" action="https://formspree.io/f/mzbnjrnb" method="post">
                                <div className="form-grid">
                                    <div className="form-group">
                                        <span className="icon"><i className="bi bi-person-fill"></i></span>
                                        <input type="text" id="fullName" name="name" placeholder="Your Name" required autoComplete="on" />
                                    </div>
                                    <div className="form-group">
                                        <span className="icon"><i className="bi bi-envelope-fill"></i></span>
                                        <input type="email" id="userEmail" name="email" placeholder="Email Address" required autoComplete="off" />
                                    </div>
                                </div>
                                <div className="form-group home-form-select">
                                    <select className="custom-select" id="service" name="service" autoComplete="off">
                                        <option>Select Service</option>
                                        <option value="air">Air Freight</option>
                                        <option value="ocean">Ocean Freight</option>
                                        <option value="rail">Rail transport</option>
                                        <option value="cargo">Cargo ship</option>
                                        <option value="bulk">Bulk cargo</option>
                                    </select>
                                </div>
                                <div className="form-grid">
                                    <div className="form-group">
                                        <span className="icon"><i className="bi bi-calendar-fill"></i></span>
                                        <input type="text" id="datepicker" name="date" className="datepicker" placeholder="mm/dd/yy" required autoComplete="off" />
                                    </div>
                                    <div className="form-group">
                                        <span className="icon"><i className="bi bi-clock-fill"></i></span>
                                        <input type="time" id="timepicker" name="time" required autoComplete="off" />
                                    </div>
                                </div>
                                <div className="form-group mb-15">
                                    <textarea id="msg" placeholder="Write Message" required></textarea>
                                </div>
                                <div className="form-group terms">
                                    <input type="checkbox" id="terms" required />
                                    <label htmlFor="terms">I agree to all terms and conditions.</label>
                                </div>
                                <button type="submit" className="theme-btn bg-dark"  data-loading-text="Please wait...">
                                    <span className="link-effect">
                                        <span className="btn-title">Make an Appionment</span>
                                    </span><i className="bi bi-arrow-right"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-1 lg-d-none"></div>
                    <div className="col-lg-5">
                        <div className="contact-content-wrap">
                            <div className="title-area">
                                <div className="sub-title"><span><i className="asterisk"></i></span>Free Consultation</div>
                                <h2 className="sec-title">Have any talks let’s get <br/> free <span className="bold">consultation</span></h2>
                            </div>
                            <div className="contact-img br-10 overlay-anim1">
                                <img className="hover-reveal-item" src="/assets/images/contact/01.jpg" alt="Contact" />
                                <a href="+126083456789" className="contact-info">
                                    <div className="icon"><i className="icon-phone-circle"></i></div>
                                    <div className="number">+12 608 (3456) 789</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default ContactInfo1;