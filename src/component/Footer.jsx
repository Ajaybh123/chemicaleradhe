import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>

            <div class="footer wow fadeIn" data-wow-delay="0.3s">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-lg-3">
                            <div class="footer-contact">
                                <h2>Office Contact</h2>
                                <p><i class="fa fa-map-marker-alt"></i>505/1 OM VALLEY ROAD SECTOR 58 FARIDABAD (H.R. )Haryana, 121004
                                </p>
                                <p><i class="fa fa-phone-alt"></i>+91 93194 23558 </p>
                                <p><i class="fa fa-envelope"></i>srkfc1994@gmail.com</p>
                                <div class="footer-social">
                                    <a href="https://x.com/"><i class="fab fa-twitter"></i></a>
                                    <a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                                    <a href="https://www.youtube.com/"><i class="fab fa-youtube"></i></a>
                                    <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
                                    <a href="https://in.linkedin.com/"><i class="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="footer-link">
                                <h2>Services Areas</h2>
                                <Link to="/product1">Chemicals Products</Link>
                                <Link to="/Borax">Borax</Link>
                                <Link to="/msoffice">Office container </Link>
                                <Link to="/msoffice">MS office container</Link>
                                <Link to="/products">Dl Malic Acid</Link>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="footer-link">
                                <h2>Useful Pages</h2>
                                <Link to="/about">About Us</Link>
                                <Link to="/contact">Contact Us</Link>
                                <Link to="/product1">Our Product</Link>

                                <Link to="/catalog">Catalog</Link>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="newsletter">
                                <h2>Newsletter</h2>
                                <p>
                                    Shree Radhey Krishna Food & Dairy Products is a trusted manufacturer and supplier of casein and dairy-based food chemicals.
                                </p>
                                <div class="form">
                                    <input class="form-control" placeholder="Email here" />
                                    <button class="btn">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container footer-menu">
                    <div class="f-menu">
                        <a href="">Terms of use</a>
                        <a href="">Privacy policy</a>
                        <a href="">Cookies</a>
                        <a href="">Help</a>
                        <a href="">FQAs</a>
                    </div>
                </div>
                <div class="container copyright">
                    <div class="row">
                        <div class="col-md-6">
                            <p>&copy; <a href="#">Copyright@2025</a>, All Right Reserved.</p>
                        </div>
                        <div class="col-md-6">
                            <p><a href="https://web4businesssolutions.com/">Designed By Web4Businesssolutions</a></p>
                        </div>
                    </div>
                </div>
            </div>


            <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
        </div>

    )
}

export default Footer
