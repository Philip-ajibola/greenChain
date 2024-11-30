import Footer from "../components/footer.jsx";
import Reviews from "../components/reviews.jsx";
import Advert from "../components/advert.jsx";
import RecentlyAdded from "../components/recentlyAdded.jsx";
import Hero from "../components/hero.jsx";
import Navbar from "../components/navbar.jsx";
import './../styles/overideStyles.css'
import '../styles/home.module.css'

export default function HomePage(){
    return (
        <div>
            <Navbar/>
            <Hero/>
            <RecentlyAdded/>
            <Advert/>
            <Reviews/>
            <Footer/>
        </div>
    )
}