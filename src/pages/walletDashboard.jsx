import StatisticsPanel from "./statisticsPanel.jsx";
import InvestmentTable from "./investmentTable.jsx";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {useEffect, useRef, useState} from "react";
import dashboard from "../assets/Group 48099633.png";
import activeFarm from "../assets/layout.png";
import activeInvestment from "../assets/copy.png";
import transactions from "../assets/bar-chart-square-02.png";

const WalletDashboard = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const menuItems = [
        { id: 1, img: dashboard, label: "Dashboard" },
        { id: 2, img: activeFarm, label: "Active Farm" },
        { id: 3, img: activeInvestment, label: "Invested Farms" },
        { id: 4, img: transactions, label: "Transaction History" },
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
    return (
        <div  className="flex bg-black w-full min-h-screen text-white py-0 lg:py-4 gap-12 px-0 lg:px-6">
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
                        <img className="w-[20px] h-[20px]" src={item.img} alt={item.label}/>
                        <p className="text-xl font-bold font-sans">{item.label}</p>
                    </div>
                ))}
            </div>

            <div className="absolute top-1 left-4 z-50  lg:hidden">
                {!isMenuOpen &&
                    <MenuIcon
                        si
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="cursor-pointer text-white text-3xl"
                    />
                }
            </div>
            <div className="flex flex-col gap-5 lg:gap-12 lg:rounded-2xl bg-background w-full lg:w-3/4 text-white py-5 px-6 ml-auto">
                <div>
                    <h1 className="text-2xl font-bold mb-2 mt-4">My Wallet</h1>
                    <h2 className="text-3xl font-bold text-green-500 mb-0 pb-0">$500,000.00</h2>
                </div>
                <div className="flex flex-col lg:flex-row gap-6">
                    <InvestmentTable/>
                    <StatisticsPanel/>
                </div>
            </div>

        </div>
    );
};

export default WalletDashboard;