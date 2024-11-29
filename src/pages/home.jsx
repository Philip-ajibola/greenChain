import Footer from "../components/footer.jsx";
import Reviews from "../components/reviews.jsx";
import Advert from "../components/advert.jsx";
import RecentlyAdded from "../components/recentlyAdded.jsx";
export default function HomePage(){
    return (
        <div>
            <RecentlyAdded/>
            <Advert/>
            <Reviews/>
            <Footer/>
        </div>
    )
}