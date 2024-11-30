import {useEffect, useRef, useState} from "react";
import dashboard from "../assets/Group 48099633.png";
import activeInvestment from "../assets/copy.png";
import activeFarm from "../assets/layout.png";
import transactions from "../assets/bar-chart-square-02.png";
import farmImage from "../assets/download (1).jpeg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Farm from "../components/singleFarm.jsx";
import {useNavigate} from "react-router-dom";
import CopyRight from "../components/copyRight.jsx";

const MyFarm = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const navigate = useNavigate();
    const menuItems = [
        { id: 1, img: dashboard, label: "Dashboard" },
        { id: 2, img: activeFarm, label: "Active Farm" },
        { id: 3, img: activeInvestment, label: "Invested Farms" },
        { id: 4, img: transactions, label: "Transaction History" },
    ];
    const farm = [
        {id:1, img:farmImage,farmName:"Sunshine farm",location: "1b Sango Ota, Lagos", description:"Luxury, Comfort, Serenity at its peak!!! Are you looking for a place to call hom...", amount: "N250,000 per day" },
        {id:2, img:farmImage,farmName:"Sunshine farm",location: "1b Magboro Ota, Ogun", description:"Luxury, Comfort, Serenity at its peak!!! Are you looking for a place to call hom...", amount: "N200,000 per day" },
        {id:3, img:farmImage,farmName:"Sunshine farm",location: "1b Abeokuta, Ogun", description:"Luxury, Comfort, Serenity at its peak!!! Are you looking for a place to call hom...", amount: "N350,000 per day" },
        {id:4, img:farmImage,farmName:"Sunshine farm",location: "1b Abeokuta, Ogun, Lagos", description:"Luxury, Comfort, Serenity at its peak!!! Are you looking for a place to call hom...", amount: "N150,000 per day" },
        {id:5, img:farmImage,farmName:"Sunshine farm",location: "1b Sango Ota, Ogun", description:"Luxury, Comfort, Serenity at its peak!!! Are you looking for a place to call hom...", amount: "N350,000 per day" },
        {id:6, img:farmImage,farmName:"Sunshine farm",location: "1b Oke Fia , Osogbo", description:"Luxury, Comfort, Serenity at its peak!!! Are you looking for a place to call hom...", amount: "N200,000 per day" },
        {id:7, img:farmImage,farmName:"Sunshine farm",location: "1b Ogo-Oluwa , Osun State", description:"Luxury, Comfort, Serenity at its peak!!! Are you looking for a place to call hom...", amount: "N230,000 per day" },
        {id:8, img:farmImage,farmName:"Sunshine farm",location: "2b  Sango Ota, Ogun", description:"Luxury, Comfort, Serenity at its peak!!! Are you looking for a place to call hom...", amount: "N220,000 per day" },
    ]
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <main className="flex bg-black w-full min-h-screen">

            <div
                ref={menuRef}
                className={`fixed top-0 left-0 h-full bg-black text-white z-50 transition-transform transform  ${
                    isMenuOpen ? "translate-x-0" : "-translate-x-full"
                } lg:translate-x-0 lg:relative lg:flex lg:flex-col lg:gap-5 lg:w-1/4`}
            >

                <div className="lg:hidden p-4">
                    <CloseIcon
                        onClick={() => setIsMenuOpen(false)}
                        className="cursor-pointer text-white text-3xl"
                    />

                </div>
                {menuItems.map((item) => (
                    <div
                        key={item.id}
                        className={`flex gap-6 items-center cursor-pointer px-3 py-2 rounded-xl ${
                            activeIndex === item.id
                                ? "bg-nav_color px-3 py-2 rounded-xl"
                                : "bg-transparent"
                        }`}
                        onClick={() => setActiveIndex(item.id)}
                    >
                        <img className="w-[20px] h-[20px]" src={item.img} alt={item.label} />
                        <p className="text-xl font-bold font-sans">{item.label}</p>
                    </div>
                ))}
            </div>

            <div className="absolute top-1 left-4 z-50  lg:hidden">
                { !isMenuOpen &&
                    <MenuIcon
                        si
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="cursor-pointer text-white text-3xl"
                    />
                }
            </div>


            <div
                className="flex flex-col gap-12 rounded-2xl bg-background w-full lg:w-3/4 text-white py-5 px-6 ml-auto">
                <div className="flex items-center flex-col lg:flex-row justify-between px-3">
                    <div className="flex flex-col gap-2 rounded-2xl bg-background py-2">
                        <p className="font-bold text-3xl font-sans">My Farm!!</p>
                        <p className="font-medium text-xl font-sans">
                            Create, track and manage your farm
                        </p>
                    </div>
                    <button
                        onClick={()=>navigate('/createFarm')}
                        className="px-3  py-2 bg-green-700 rounded-md font-semibold hover:bg-green-900 hover:py-3 hover:px-4 transition-all duration-300">Create
                        Farm
                    </button>
                </div>


                <div
                    className=" flex flex-col lg:grid  lg:grid-cols-3  gap-4 items-center justify-center px-2.5 lg:bg-background1 py-3 lg:py-6">
                    {
                        farm.map((farm) => (
                            // eslint-disable-next-line react/jsx-key
                            <Farm  address={farm.location} farmName={farm.farmName} amountNeeded={farm.amount} farmDescription={farm.description} image={farm.img} />
                        ))
                    }
                </div>
                <CopyRight/>
            </div>
        </main>
    );
};

export default MyFarm;


