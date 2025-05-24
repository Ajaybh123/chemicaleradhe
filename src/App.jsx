// App.jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Topbar from './component/Topbar'
import Navbar from './component/Navbar'
import Footer from './component/Footer'

// Pages
import Home from './pages/Home'
import About from './component/About'
import Contact from './component/Contact'
import Product1 from './component/Product1'
import Products, { AmmoniumChloride, Borax, BoricAcid, Dextrose, DLTartaricAcid, Dltartricacid, Ltartric, MalicAcid, MSOfficeContainer, MSPortableToilet, OfficeContainer, OfficeContainer1, PhosphoricAcid, PortableCabin, Potasium, PotassiumSorbate, ShippingContainer, SodaAsh, SodiumCitrate, TitaniumDioxide } from './pages/Products'
import Certificate from './component/Certificate'
import Catalog from './pages/Catalog'

const App = () => {
  return (
    <Router>
      <Topbar />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product1" element={<Product1 />} />

        <Route path="/products" element={<Products />} />
        <Route path="/malicacid" element={<MalicAcid />} />
        <Route path='/tartricacid' element={<Dltartricacid />} />
        <Route path='/potasium' element={<Potasium />} />
        <Route path='/Ltartric' element={<Ltartric />} />
        <Route path='/dextrose' element={<Dextrose />} />
        <Route path='/borax' element={<Borax />} />
        <Route path='/BoricAcid' element={<BoricAcid />} />
        <Route path='/titanium' element={<TitaniumDioxide />} />
        <Route path='/portablecabin' element={<PortableCabin />} />
        <Route path='/msoffice' element={<MSOfficeContainer />} />
        <Route path='/toilet' element={<MSPortableToilet />} />
        <Route path='/shipping' element={<ShippingContainer />} />
        <Route path='/office' element={<OfficeContainer />} />
        <Route path='/officecontainer' element={<OfficeContainer1 />} />
        <Route path='/dltartric' element={<DLTartaricAcid />} />
        <Route path='/amonium' element={<AmmoniumChloride />} />
        <Route path='/potesium' element={<PotassiumSorbate />} />
        <Route path='/phosphoric' element={<PhosphoricAcid />} />
        <Route path='/soda ash' element={<SodaAsh />} />
        <Route path='/sodium' element={<SodiumCitrate />} />
        <Route path='/catalog' element={<Catalog />} />



        <Route path="/certificate" element={<Certificate />} />
        <Route path="/contact" element={<Contact />} />


      </Routes>

      <Footer />
    </Router>
  )
}

export default App
