import Footer from "../components/footer.jsx";
import Reviews from "../components/reviews.jsx";
import Advert from "../components/advert.jsx";
import RecentlyAdded from "../components/recentlyAdded.jsx";
import Hero from "../components/hero.jsx";
import '../styles/overideStyles.css'
import Navbar from "../components/navbar.jsx";
export default function HomePage(){
    return (
        <div >
            <Navbar/>
            <Hero/>
            <RecentlyAdded/>
            <Advert/>
            <Reviews/>
            <Footer/>
        </div>
    )
}