
import React from 'react'
import Crousel from '../component/Crousel'
import Feature from '../component/Feature'
import Fact from '../component/Fact'
import Service from '../component/Product'
import Certificate from '../component/Certificate'
import Testimonial from '../component/Testimonial'
import Faq from '../component/Faq'
import Test from '../component/Test'
import Blog from '../component/Blog'

const Home = () => {
    return (
        <>
            <Crousel />
            <Feature />
            <Fact />
            <Service />
            <Certificate />
            <Testimonial />
            <Faq />
            <Test />
            <Blog />
        </>
    )
}

export default Home
