import Footer from "../components/footer.jsx";
import Reviews from "../components/reviews.jsx";
import Advert from "../components/advert.jsx";
import Farm from "../reuseables/farm.tsx";
export default function HomePage(){
    return (
        <div>
            <Farm />
            <Advert/>
            <Reviews/>
            <Footer/>
        </div>
    )
}