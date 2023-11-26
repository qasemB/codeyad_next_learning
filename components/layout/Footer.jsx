import React from 'react';

const Footer = () => {
    return (
        <footer id="contact" className="contact">
            <div className="container">
                <div className="footer-top">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="footer-logo">
                                    <a href="index.html">carvilla</a>
                                </div>
                                <p>
                                    Ased do eiusm tempor incidi ut labore et dolore magnaian aliqua. Ut enim ad minim veniam.
                                </p>
                                <div className="footer-contact">
                                    <p>info@themesine.com</p>
                                    <p>+1 (885) 2563154554</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6">
                            <div className="single-footer-widget">
                                <h2>about devloon</h2>
                                <ul>
                                    <li><a href="#">about us</a></li>
                                    <li><a href="#">career</a></li>
                                    <li><a href="#">terms <span> of service</span></a></li>
                                    <li><a href="#">privacy policy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-xs-12">
                            <div className="single-footer-widget">
                                <h2>top brands</h2>
                                <div className="row">
                                    <div className="col-md-7 col-xs-6">
                                        <ul>
                                            <li><a href="#">BMW</a></li>
                                            <li><a href="#">lamborghini</a></li>
                                            <li><a href="#">camaro</a></li>
                                            <li><a href="#">audi</a></li>
                                            <li><a href="#">infiniti</a></li>
                                            <li><a href="#">nissan</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-5 col-xs-6">
                                        <ul>
                                            <li><a href="#">ferrari</a></li>
                                            <li><a href="#">porsche</a></li>
                                            <li><a href="#">land rover</a></li>
                                            <li><a href="#">aston martin</a></li>
                                            <li><a href="#">mersedes</a></li>
                                            <li><a href="#">opel</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-offset-1 col-md-3 col-sm-6">
                            <div className="single-footer-widget">
                                <h2>news letter</h2>
                                <div className="footer-newsletter">
                                    <p>
                                        Subscribe to get latest news  update and informations
                                    </p>
                                </div>
                                <div className="hm-foot-email">
                                    <div className="foot-email-box">
                                        <input type="text" className="form-control" placeholder="Add Email" />
                                    </div>
                                    <div className="foot-email-subscribe">
                                        <span><i className="fa fa-arrow-right"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="row">
                        <div className="col-sm-6">
                            <p>
                                &copy; copyright.designed and developed by <a href="https://www.themesine.com/">themesine</a>.
                            </p>
                        </div>
                        <div className="col-sm-6">
                            <div className="footer-social">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-instagram"></i></a>
                                <a href="#"><i className="fa fa-linkedin"></i></a>
                                <a href="#"><i className="fa fa-pinterest-p"></i></a>
                                <a href="#"><i className="fa fa-behance"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="scroll-Top">
                <div className="return-to-top">
                    <i className="fa fa-angle-up " id="scroll-top" data-toggle="tooltip" data-placement="top" title="" data-original-title="Back to Top" aria-hidden="true"></i>
                </div>

            </div>

        </footer>
    );
}

export default Footer;
