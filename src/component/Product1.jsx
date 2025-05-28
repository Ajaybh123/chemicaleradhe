import React from 'react'
import { Link } from 'react-router-dom'
const Product1 = () => {
    return (
        <div className="service">
            <div className="container">
                <div className="section-header text-center">
                    <p>Our Products</p>
                    <h2>We Provide Products</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" >
                        <div className="service-item">
                            <div className="service-img">
                                <img style={{ cursor: "pointer" }} src="img/dl malic acid china.avif" alt="Image" />
                                <div className="service-overlay">
                                    <p>
                                        DL-Malic acid is a synthetic mixture of two stereoisomers: D-malic acid and L-malic acid. It is a dicarboxylic acid commonly used in food, pharmaceuticals, and cosmetics due to its sour taste and buffering properties.
                                    </p>
                                </div>
                            </div>
                            <div className="service-text">
                                <Link to="/products">
                                    <span style={{ fontSize: '1.5rem', cursor: 'pointer', }}>DL-MALIC ACID </span>
                                </Link>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;

                                <a className="btn" href="img/dl malic acid china.avif" data-lightbox="service">+</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="service-item">
                            <div className="service-img">
                                <img style={{ cursor: "pointer" }} src="img/malic acid.jpg" alt="Image" />
                                <div className="service-overlay">
                                    <p>
                                        Malic acid is a naturally occurring dicarboxylic acid found in many fruits, especially apples. It plays an important role in the metabolic process known as the Krebs cycle (or citric acid cycle), where it helps generate energy in living organisms.
                                    </p>
                                </div>
                            </div>
                            <div className="service-text">
                                <Link to={'/MalicAcid'}> <span style={{ fontSize: '1.5rem', cursor: "pointer", }}>MALIC ACID</span>
                                </Link> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <a className="btn" href="img/malic acid.jpg" data-lightbox="service">+</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item">
                            <div className="service-img">
                                <img style={{ cursor: "pointer" }} src="img/dl tartric acid.jpg" alt="Image" />
                                <div className="service-overlay">
                                    <p>
                                        DL-Tartaric acid is a synthetic, racemic mixture of the two enantiomers: D-(+)-tartaric acid and L-(–)-tartaric acid. Unlike naturally occurring tartaric acid (typically the dextrorotatory form), DL-tartaric acid does not rotate plane-polarized light due to the presence of both optical isomers in equal amounts.
                                    </p>
                                </div>
                            </div>
                            <div className="service-text">
                                <Link to={'/tartricacid'}> <span style={{ fontSize: '1.5rem', cursor: "pointer", }}>DL TARTRIC ACID</span>
                                </Link> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;
                                <a className="btn" href="img/dl tartric acid.jpg" data-lightbox="service">+</a>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item">
                            <div className="service-img">
                                <img style={{ cursor: "pointer" }} src="img/Potassium-permanganate.jpg" alt="Image" />
                                <div className="service-overlay">
                                    <p>
                                        Potassium permanganate is a purple-black crystalline solid and a powerful oxidizing agent widely used in various industrial and medical applications. It dissolves in water to produce a deep purple solution and is commonly employed in water treatment to remove iron and hydrogen sulfide, disinfection of wounds, and as an oxidizer in chemical synthesis.
                                    </p>
                                </div>
                            </div>
                            <div className="service-text">
                                <Link to={'/potasium'}> <span style={{ fontSize: '1.5rem', cursor: "pointer", }}>Potassium Permanganate</span>
                                </Link>
                                <a className="btn" href="img/Potassium-permanganate.jpg" data-lightbox="service">+</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="service-item">
                            <div className="service-img">
                                <img style={{ cursor: "pointer" }} src="img/tartric acid.jpg" alt="Image" />
                                <div className="service-overlay">
                                    <p>
                                        L-(+)-Tartaric acid is the naturally occurring, optically active form of tartaric acid. It is a white, crystalline organic acid found in many plants, particularly grapes, and is commonly used in the food, pharmaceutical, and chemical industries. It plays a key role in winemaking and is known for its sour taste and strong acidity.
                                    </p>
                                </div>
                            </div>
                            <div className="service-text">
                                <Link to={'/Ltartric'}> <span style={{ fontSize: '1.5rem', cursor: "pointer", }}>L+ TARTARIC ACID</span>
                                </Link>&nbsp;&nbsp;&nbsp;&nbsp;
                                <a className="btn" href="img/tartric acid.jpg" data-lightbox="service">+</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item">
                            <div className="service-img">
                                <img style={{ cursor: "pointer" }} src="img/Dextrose-Anhydrous.png" alt="Image" />
                                <div className="service-overlay">
                                    <p>
                                        Dextrose Anhydrous is a white, crystalline, odorless powder made from refined corn starch. It is the anhydrous (water-free) form of D-glucose, a simple sugar (monosaccharide) that serves as a primary energy source in the body. Unlike dextrose monohydrate, it contains no water of crystallization, making it more concentrated and slightly less bulky.
                                    </p>
                                </div>
                            </div>
                            <div className="service-text">
                                <Link to={'/Dextrose'}> <span style={{ fontSize: '1.5rem', cursor: "pointer", }}>Dextrose anhydrous </span>
                                </Link> &nbsp; &nbsp; &nbsp;
                                <a className="btn" href="img/Dextrose-Anhydrous.png" data-lightbox="service">+</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item">
                            <div className="service-img">
                                <img style={{ cursor: "pointer" }} src="img/BORAX-10-KILO.jpg" alt="Image" />
                                <div className="service-overlay">
                                    <p>
                                        Borax (Sodium Borate) is a naturally occurring mineral and a versatile chemical compound commonly used in cleaning, laundry, and household products. It appears as a white, powdery substance and has applications in various industries, including glass manufacturing, cosmetics, and agriculture. Borax is known for its ability to soften water, act as a mild antiseptic, and serve as an effective cleaning agent.
                                    </p>
                                </div>
                            </div>
                            <div className="service-text">
                                <Link to={'/Borax'}> <span style={{ fontSize: '1.5rem', cursor: "pointer", }}>BORAX </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </Link>
                                <a className="btn" href="img/BORAX-10-KILO.jpg" data-lightbox="service">+</a>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item">
                            <div className="service-img">
                                <img style={{ cursor: "pointer" }} src="img/borax acid.jpg" alt="Image" />
                                <div className="service-overlay">
                                    <p>
                                        Boric Acid is a weak, naturally occurring acid derived from boron. It usually appears as a white, crystalline powder or in granule form. Boric acid is widely used as an antiseptic, insecticide, flame retardant, and in various industrial applications. In medicine, it serves as an eye wash or antiseptic for minor cuts and burns.
                                    </p>
                                </div>

                            </div>

                            <div className="service-text">
                                <Link to={'/BoricAcid'}> <span style={{ fontSize: '1.5rem', cursor: "pointer", }}> &nbsp; BORIC ACID </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </Link>
                                <a className="btn" href="img/borax acid.jpg" data-lightbox="service">+</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item">
                            <div className="service-img">
                                <img style={{ cursor: "pointer" }} src="img/titanium deoxide.jpg" alt="Image" />
                                <div className="service-overlay">
                                    <p>
                                        Titanium dioxide is a naturally occurring oxide of titanium, commonly used as a white pigment due to its brightness and very high refractive index. It appears as a white, powdery substance and is chemically stable, non-reactive under normal conditions, and resistant to UV radiation.
                                    </p>
                                </div>
                            </div>
                            <div className="service-text">
                                <Link to={'/titanium'}> <span style={{ fontSize: '1.5rem', cursor: "pointer", }}> &nbsp; TITANIUM DIOXIDE </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                                </Link>
                                <a className="btn" href="img/titanium deoxide.jpg" data-lightbox="service">+</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-item">
                            <div className="service-img">
                                <img style={{ cursor: "pointer" }} src="img/dbonzol.jpg" alt="Image" />
                                <div className="service-overlay">
                                    <p>
                                        Dibenzoyl-L-tartaric acid is a derivative of naturally occurring L-tartaric acid in which both hydroxyl groups are esterified with benzoyl groups. It is a chiral compound widely used in organic chemistry, particularly for the resolution of racemic mixtures—separating enantiomers based on their differing interactions with this chiral acid.
                                    </p>
                                </div>
                            </div>
                            <div className="service-text">

                                <Link to={'/dltartric'}> <span style={{ fontSize: '1.5rem', cursor: "pointer", }}>  Dibenzoyl L Tartaric acid </span>&nbsp; &nbsp;
                                </Link>
                                <a className="btn" href="img/dbonzol.jpg" data-lightbox="service">+</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-item">
                            <div className="service-img">
                                <img style={{ cursor: "pointer" }} src="img/amonium cloride.jpg" alt="Image" />
                                <div className="service-overlay">
                                    <p>
                                        Ammonium Chloride is a white crystalline compound with the chemical formula NH₄Cl. It is highly soluble in water and is known for its slightly salty taste. This compound is widely used across industries due to its versatile chemical properties.
                                    </p>
                                </div>
                            </div>
                            <div className="service-text">


                                <Link to={'/amonium'}> <span style={{ fontSize: '1.5rem', cursor: "pointer", }}>  &nbsp; Ammonium Chloride </span>&nbsp; &nbsp;
                                </Link>
                                <a className="btn" href="img/amonium cloride.jpg" data-lightbox="service">+</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-item">
                            <div className="service-img">
                                <img style={{ cursor: "pointer" }} src="img/potasium surbate.jpg" alt="Image" />
                                <div className="service-overlay">
                                    <p>
                                        potassium Sorbate is the potassium salt of sorbic acid, with the chemical formula C₆H₇KO₂. It appears as a white crystalline powder or granules and is widely recognized for its role as a highly effective preservative in food, beverage, cosmetic, and pharmaceutical products.
                                    </p>
                                </div>
                            </div>
                            <div className="service-text">

                                <Link to={'/potesium'}> <span style={{ fontSize: '1.5rem', cursor: "pointer", }}>  &nbsp; Potassium Sorbate </span>&nbsp; &nbsp;
                                </Link>
                                <a className="btn" href="img/potasium surbate.jpg" data-lightbox="service">+</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-item">
                            <div className="service-img">
                                <img style={{ cursor: "pointer" }} src="img/Phosphoric-Acid.png" alt="Image" />
                                <div className="service-overlay">
                                    <p>
                                        phosphoric Acid (H₃PO₄) is a colorless, odorless, and non-volatile mineral acid that is widely used in industrial, agricultural, and food applications. It is typically available as a clear, viscous liquid and can also be found in crystalline form.
                                    </p>
                                </div>
                            </div>
                            <div className="service-text">

                                <Link to={'/phosphoric'}> <span style={{ fontSize: '1.5rem', cursor: "pointer", }}>  &nbsp; Phosphoric Acid </span>&nbsp; &nbsp;
                                </Link>
                                <a className="btn" href="img/Phosphoric-Acid.png" data-lightbox="service">+</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-item">
                            <div className="service-img">
                                <img style={{ cursor: "pointer" }} src="img/soda ash.jpg" alt="Image" />
                                <div className="service-overlay">
                                    <p>
                                        Soda Ash, also known as Sodium Carbonate (Na₂CO₃), is a white, odorless, water-soluble powder used in a wide range of industrial and commercial applications. It is a highly alkaline compound that plays a vital role in manufacturing processes across glass, detergents, chemicals, and water treatment industries.</p>
                                </div>
                            </div>
                            <div className="service-text">

                                <Link to={'/soda ash'}> <span style={{ fontSize: '1.5rem', cursor: "pointer", }}>  &nbsp; SODA ASH </span>&nbsp; &nbsp;
                                </Link>
                                <a className="btn" href="img/soda ash.jpg" data-lightbox="service">+</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-item">
                            <div className="service-img">
                                <img style={{ cursor: "pointer" }} src="img/sodium-citrate.jpg" alt="Image" />
                                <div className="service-overlay">
                                    <p>
                                        Sodium Citrate is the sodium salt of citric acid, with the chemical formula Na₃C₆H₅O₇. It appears as a white, crystalline powder or granules, with a slightly salty and sour taste. It is highly soluble in water and widely used across the food, pharmaceutical, and industrial sectors.
                                    </p>
                                </div>
                            </div>
                            <div className="service-text">

                                <Link to={'/sodium'}> <span style={{ fontSize: '1.5rem', cursor: "pointer", }}>  &nbsp; Sodium Citrate </span>&nbsp; &nbsp;
                                </Link>
                                <a className="btn" href="img/sodium-citrate.jpg" data-lightbox="service">+</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="video wow fadeIn" data-wow-delay="0.1s">
                <div className="container">
                    <button type="button" className="btn-play" data-toggle="modal" data-src="" data-target="#videoModal">
                        <span></span>
                    </button>
                </div>
            </div>

            <div className="modal fade" id="videoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src="" id="video" allowscriptaccess="always" allow="autoplay"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Product1
