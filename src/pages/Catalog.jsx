import React from 'react';

const Catalog = () => {
    return (
        <div className="container text-center my-5">
            <h2 className="text-danger">SHREE RADHEY KRISHNA FOOD CHEMICALS CATALOG</h2>
            <a
                href="/shree-radhey-krishna-food-chemicals.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-3"
            >
                Download Catalog
            </a>
        </div>
    );
};

export default Catalog;
