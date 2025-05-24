import React from 'react'

const Topbar = () => {
    return (

        <div className="wrapper">

            <div className="top-bar">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-12">
                            <div className="logo">
                                <a href="/">
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <img
                                            src="img/logo1.png"
                                            alt="Company Logo"
                                            style={{
                                                width: '130px',
                                                height: '130px',
                                                borderRadius: '50%',
                                                objectFit: 'cover',
                                                marginRight: '15px',
                                            }}
                                        />
                                        <h2 style={{ fontSize: '18px', fontWeight: 'bold', margin: 0 }}>
                                            SHREE RADHEY KRISHNA FOOD CHEMICALS
                                        </h2>
                                    </div>


                                </a>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-7 d-none d-lg-block">
                            <div className="row">
                                <div className="col-4">
                                    <div className="top-bar-item">
                                        <div className="top-bar-icon">
                                            <i className="flaticon-calendar"></i>
                                        </div>
                                        <div className="top-bar-text">
                                            <h3 className='text-bold'>Opening Hour</h3>
                                            <p>Mon - Sut, 8:00AM - 9:00PM</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="top-bar-item">
                                        <div className="top-bar-icon">
                                            <i className="flaticon-call"></i>
                                        </div>
                                        <div className="top-bar-text">
                                            <h3>Call Us</h3>
                                            <p>+91 97185 66296</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="top-bar-item">
                                        <div className="top-bar-icon">
                                            <i className="flaticon-send-mail"></i>
                                        </div>
                                        <div className="top-bar-text">
                                            <h3>Email Us</h3>
                                            <p>srkfc1994@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
