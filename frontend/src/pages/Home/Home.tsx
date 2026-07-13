import Navbar from '../../components/common/Navbar/Navbar' 
import Hero from '../../components/landing/Hero/Hero'
import Features from '../../components/landing/Features/Features'
import WhyChooseUs from '../../components/landing/WhyChooseUs/WhyChooseUs'
import TranslationDemo from '../../components/landing/TranslationDemo/TranslationDemo'
import Testimonials from '../../components/landing/Testimonials/Testimonials'
import Clients from '../../components/landing/Clients/Clients'
import Footer from '../../components/common/Footer/Footer'

function Home(){
    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <WhyChooseUs />
            <TranslationDemo />
            <Testimonials />
            <Clients />
            <Footer />
        </>
    )
}

export default Home