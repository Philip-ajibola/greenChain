import {useEffect, useRef, useState} from "react";
import dashboard from "../assets/Group 48099633.png";
import activeInvestment from "../assets/copy.png";
import activeFarm from "../assets/layout.png";
import transactions from "../assets/bar-chart-square-02.png";
import invest from "../assets/Group 1000002275.png";
import support from "../assets/Group 1000002275 (1).png";
import wallet from "../assets/Group 1000002276.png";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const InvestorDashBoard = () => {
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
        <main className="flex bg-black w-full h-screen">

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


            <div className="flex flex-col gap-12 rounded-2xl bg-background w-full lg:w-3/4 text-white py-5 px-6 ml-auto">
                <div className="flex flex-col gap-2 rounded-2xl bg-background py-2">
                    <p className="font-bold text-3xl font-sans">Welcome Bejamin!!</p>
                    <p className="font-medium text-xl font-sans">
                        You can Invest, track and manage your farms
                    </p>
                </div>
                <div className="flex flex-col gap-6 rounded-2xl bg-background1 items-center py-2">
                    <p className="font-extrabold text-3xl font-sans">My Wallet</p>
                    <AccountBalanceWalletIcon sx={{ fontSize: 50, color: "green" }} />
                    <p className="font-extrabold text-3xl font-sans">$76,890.26</p>
                </div>
                <div className="flex flex-col gap-6 rounded-2xl bg-background1 items-center py-2">
                    <p className="font-extrabold text-3xl font-sans">Quick Action</p>
                    <div className="flex items-center justify-between w-[90%]">
                        <div className="flex flex-col gap-2">
                            <img src={wallet} alt={"Wallets"} />
                            <p>My Wallet</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <img src={invest} alt={"Investment"} />
                            <p>Invest</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <img src={support} alt={"Support"} />
                            <p>Support</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-12 rounded-2xl bg-background1 items-center">
                    <p className="font-extrabold text-3xl font-sans">Investment</p>
                    <div></div>
                </div>
            </div>
        </main>
    );
};

export default InvestorDashBoard;


