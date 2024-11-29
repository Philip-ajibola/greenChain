import dashboard from "../assets/Group 48099633.png";
import activeInvestment from "../assets/copy.png";
import activeFarm from "../assets/layout.png";
import transactions from "../assets/bar-chart-square-02.png";
import invest from "../assets/Group 1000002275.png";
import support from "../assets/Group 1000002275 (1).png";
import wallet from "../assets/Group 1000002276.png";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';


const InvestorDashBoard = ()=>{
    return(
        <main className="flex  px-2.5 gap-5 bg-black">
            <div >
                <div>
                    <img src={dashboard} alt={"Dashboard"}/>
                    <p>Dashboard</p>
                </div>
                <div>
                    <img src={activeFarm} alt={"Active Farms"}/>
                    <p>Active Farm</p>
                </div>
                <div>
                    <img src={activeInvestment} alt={"Investment"}/>
                    <p>Invested Farms</p>
                </div>
                <div>
                    <img src={transactions} alt={"Transaction"}/>
                    <p>Transaction History</p>
                </div>
            </div>
                <div className="flex flex-col gap-12 rounded-2xl border-green-700 border-2 bg-background">
                    <div className="flex flex-col gap-12 rounded-2xl bg-background1">
                            <p className="font-extrabold text-3xl font-sans">Welcome Bejamin!!</p>
                            <p className="font-bold text-xl font-sans">You can Invest, track and manage your farms</p>
                    </div>
                    <div className="flex flex-col gap-12 rounded-2xl bg-background1">
                        <p className="font-extrabold text-3xl font-sans">My Wallet</p>
                        <AccountBalanceWalletIcon sx={{fontSize: 50, color: 'green'}}/>
                        <p className="font-extrabold text-3xl font-sans">$76,890.26</p>
                    </div>
                    <div className="flex flex-col gap-12 rounded-2xl bg-background1">
                        <p>Quick Action</p>
                        <div className="flex items-center justify-between px-20 ">
                            <div className="flex flex-col gap-5">
                                <img src={wallet} alt={"Wallets"}/>
                                <p>My Wallet</p>
                            </div>
                            <div className="flex flex-col gap-5">
                                <img src={invest} alt={"Investment"}/>
                                <p>Invest</p>
                            </div>
                            <div className="flex flex-col gap-5">
                                <img src={support} alt={"Support"}/>
                                <p>Support</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-12 rounded-2xl bg-background1">
                        <p className="font-extrabold text-3xl font-sans">Investment</p>
                        <div></div>
                    </div>
                </div>

        </main>
    )
}
export default InvestorDashBoard;