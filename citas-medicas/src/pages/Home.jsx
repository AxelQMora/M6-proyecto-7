import Hero from './HomeComponents/Hero'
import Services from './HomeComponents/Services'
import AboutUs from './HomeComponents/AboutUs'
import Testimony from './HomeComponents/Testimony'
import Footer from './HomeComponents/Footer'




function Home() {

    return (
        <>
            <main>
                <Hero></Hero>
                <Services></Services>
                <AboutUs></AboutUs>
                <Testimony></Testimony>
            </main>

            <Footer></Footer>
               
        </>
    )
}

export default Home