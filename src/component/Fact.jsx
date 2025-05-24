import React from 'react'
import '../../public/css/fact.css'

const Fact = () => {
    return (
        <div className="fact">
            <div className="container-fluid">
                <div className="row counters">
                    <div className="col-md-6 fact-left wow slideInLeft">
                        <div className="row">
                            <div className="col-12 col-md-6 mb-4">
                                <div className="fact-icon text-center">
                                    <i className="flaticon-worker" style={{ fontSize: "2.5rem" }}></i>
                                </div>
                                <div className="fact-text text-center">
                                    <h2 data-toggle="counter-up" style={{ fontSize: "2rem" }}>1000</h2>
                                    <p style={{ fontSize: "1rem" }}>Expert Workers</p>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 mb-4">
                                <div className="fact-icon text-center">
                                    <i className="flaticon-building" style={{ fontSize: "2.5rem" }}></i>
                                </div>
                                <div className="fact-text text-center">
                                    <h2 data-toggle="counter-up" style={{ fontSize: "2rem" }}>10000</h2>
                                    <p style={{ fontSize: "1rem" }}>Happy Clients</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-6 fact-right wow slideInRight">
                        <div className="row">
                            <div className="col-12 col-md-6 mb-4">
                                <div className="fact-icon text-center">
                                    <i className="flaticon-address" style={{ fontSize: "2.5rem" }}></i>
                                </div>
                                <div className="fact-text text-center">
                                    <h2 data-toggle="counter-up" style={{ fontSize: "2rem" }}>20000</h2>
                                    <p style={{ fontSize: "1rem" }}>Completed Product</p>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 mb-4">
                                <div className="fact-icon text-center">
                                    <i className="flaticon-crane" style={{ fontSize: "2.5rem" }}></i>
                                </div>
                                <div className="fact-text text-center">
                                    <h2 data-toggle="counter-up" style={{ fontSize: "2rem" }}>50000</h2>
                                    <p style={{ fontSize: "1rem" }}>Running Product</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fact
