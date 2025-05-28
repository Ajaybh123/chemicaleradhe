import React from 'react'

const Blog = () => {
    return (

        <div className="blog">
            <div className="container">
                <div className="section-header text-center">
                    <p>Latest Blog</p>
                    <h2>Latest From Our Blog</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="blog-item">
                             <div className="blog-img">
                                <img src="img/product9.jpeg" alt="Image" style={{ height: '250px', width: '100%', objectFit: 'cover' }} />
                            </div>
                            <div className="blog-title">
                                <h3>DL TARTRIC ACID</h3>
                                <a className="btn" href="">+</a>
                            </div>
                            <div className="blog-meta">
                                <p><a href="">Chemicals</a></p>
                            </div>
                            <div className="blog-text">
                                <p>
                                    DL-Tartaric Acid is a synthetic form of tartaric acid, a white, crystalline organic acid that occurs naturally in many fruits, especially grapes.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src="img/product7.jpeg" alt="Image" style={{ height: '250px', width: '100%', objectFit: 'cover' }} />
                            </div>

                            <div className="blog-title">
                                <h3>DL MALIC ACID</h3>
                                <a className="btn" href="">+</a>
                            </div>
                            <div className="blog-meta">
                                <p><a href="">Chemicals</a></p>
                            </div>
                            <div className="blog-text">
                                <p>
                                    DL-Malic Acid is a crystalline organic compound used as a food additive and flavor enhancer. It provides a smooth, tart taste.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="blog-item">
                           <div className="blog-img">
                                <img src="img/tartric acid.jpg" alt="Image" style={{ height: '250px', width: '100%', objectFit: 'cover' }} />
                            </div>
                            <div className="blog-title">
                                <h3> L+ Tartric acid</h3>
                                <a className="btn" href="">+</a>
                            </div>
                            <div className="blog-meta">
                                <p><a href="">Chemicals</a></p>
                            </div>
                            <div className="blog-text">
                                <p>
                                    L(+)-Tartaric Acid, also known as natural tartaric acid, is a naturally occurring organic acid found primarily in grapes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Blog
