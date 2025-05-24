import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="nav-bar">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                    <Link to={'/'} className="navbar-brand">
                        <img
                            src="img/logo1.png"
                            alt="Company Logo"
                            style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                objectFit: 'cover',
                                marginRight: '15px',
                            }}
                        />
                    </Link>
                    <button
                        type="button"
                        className="navbar-toggler"
                        data-toggle="collapse"
                        data-target="#navbarCollapse"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav mr-auto">
                            <Link to="/" className="nav-item nav-link active">Home</Link>
                            <Link to="/about" className="nav-item nav-link">About</Link>
                            <Link to="/product1" className="nav-item nav-link">Product</Link>
                            <Link to="/certificate" className="nav-item nav-link">Certificate</Link>

                            <Link to="/catalog" className="nav-item nav-link">Catalog</Link>
                            <Link to="/contact" className="nav-item nav-link">Contact</Link>
                        </div>
                        <div className="ml-auto">
                            <Link to="/contact" className="btn btn-primary">Enquiry</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
