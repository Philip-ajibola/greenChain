import { useEffect, useRef, useState } from "react";
import dashboard from "../assets/Group 48099633.png";
import activeInvestment from "../assets/copy.png";
import activeFarm from "../assets/layout.png";
import transactions from "../assets/bar-chart-square-02.png";
import settings from "../assets/settings-01.png";
import logout from "../assets/upload.png";
import farm from "../assets/download (1).jpeg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import CopyRight from "../components/copyRight.jsx";
const FarmerDashboard = ()=>{
    const [activeIndex, setActiveIndex] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const menuItems = [
        { id: 1, img: dashboard, label: "Dashboard" },
        { id: 2, img: activeFarm, label: "Active Farm" },
        { id: 3, img: activeInvestment, label: "Invested Farms" },
        { id: 4, img: transactions, label: "Transaction History" },
        { id: 4, img: settings, label: "Settings" },
        { id: 4, img: logout, label: "Log out" },
    ];
    const transaction = [
        { id: 1, img: farm, title: "Yam Farm",dateCreated: "Jan 23 2024", dateInvested: "Feb 20 2024", expectedProfit:"$78,300" },
        { id: 2, img: farm, title: "Potatoes Farm",dateCreated: "Jan 23 2024", dateInvested: "Feb 20 2024", expectedProfit:"$78,300" },
        { id: 3, img: farm, title: "Corn Farm",dateCreated: "Jan 23 2024", dateInvested: "Feb 20 2024", expectedProfit:"$78,300" },
        { id: 4, img: farm, title: "Cassava Farm",dateCreated: "Jan 23 2024", dateInvested: "Feb 20 2024", expectedProfit:"$78,300" },
        { id: 5, img: farm, title: "Mango Farm",dateCreated: "Jan 23 2024", dateInvested: "Feb 20 2024", expectedProfit:"$78,300" },
        { id: 6, img: farm, title: "Pepper Farm",dateCreated: "Jan 23 2024", dateInvested: "Feb 20 2024", expectedProfit:"$78,300" },
    ];

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
    const item = [
        {id:1, label:"No of farms",number:"6"},
        {id:2, label:"Invested Farms",number:"5"},
        {id:3, label:"Amount Invested",number:"$432.78"},
    ]

    return (
        <main className="flex bg-black w-full min-h-screen gap-12 px-0 lg:px-8 ">

            <div
                ref={menuRef}
                className={`fixed top-0 left-0 h-full bg-black text-white z-50 transition-transform transform ${
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
                            activeIndex === item.id ? "bg-nav_color" : "bg-transparent"
                        }`}
                        onClick={() => setActiveIndex(item.id)}
                    >
                        <img className="w-[20px] h-[20px]" src={item.img} alt={item.label}/>
                        <p className="text-xl font-bold font-sans">{item.label}</p>
                    </div>
                ))}
            </div>

            <div className="absolute top-2 left-4 z-50 lg:hidden md:pl-6">
                {!isMenuOpen && (
                    <MenuIcon
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="cursor-pointer text-white text-3xl mb-5"
                    />
                )}
            </div>
            <div className="flex flex-col gap-6 lg:rounded-2xl bg-background w-full lg:w-3/4 text-white py-5  px-6 ml-auto">
                <div className="flex flex-col gap-2 rounded-2xl bg-background py-2">
                    <p className="font-bold text-3xl font-sans">Welcome Bejamin!!</p>
                    <p className="font-medium text-xl font-sans text-center lg:text-start md:text-start">
                        You can Invest, track and manage your farms
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-12 bg-background1">
                    {item.map((item) => (
                        <div
                            className="flex flex-col w-[90%] lg:w-[30%] h-[180px] border-2 border-white rounded-2xl items-center justify-between py-2 px-2"
                            key={item.id}>
                            <p className="font-semibold text-2xl">{item.label}</p>
                            <p className="font-extra text-6xl">{item.number}</p>
                        </div>


                    ))}
                </div>
                <div className="flex flex-col gap-6 rounded-2xl bg-background1 items-center py-2">
                    {transaction.map((item) => (
                        <div key={item.id} className="flex items-center justify-between px-3 py-2 w-full font-light lg:font-bold font-sans ">
                            <div className="flex gap-3 items-center">
                                <img
                                    className="w-[30px] h-[30px] rounded-full"
                                    src={item.img}
                                    alt={"Profile"}
                                />
                                <p className="md:text-sm">{item.title}</p>
                            </div>
                            <p className="md:text-sm">{item.dateCreated}</p>
                            <p className="hidden lg:block md:text-sm">{item.dateInvested}</p>
                            <p>{item.expectedProfit}</p>
                        </div>
                    ))}
                </div>
                <CopyRight/>
            </div>
        </main>
    )

}

export default FarmerDashboard