import { useRoutes} from "react-router-dom";
import HomePage from "./pages/home.jsx";
import InvestorDashboard from "./pages/investorDashboard.jsx";
import FarmerDashboard from "./pages/farmerDashboard.jsx";
import MyFarm from "./pages/myFarm.jsx";
import CreateFarm from "./pages/createFarm.jsx";
import Login from "./pages/login.jsx";
import WalletDashboard from "./pages/walletDashboard.jsx";

export default function App() {
    const ROUTES = [
        {path:'/', element:<HomePage/>},
        {path:'/investorDashboard', element:<InvestorDashboard/>},
        {path:'/farmerDashboard', element:<FarmerDashboard/>},
        {path:'/myFarm', element:<MyFarm/>},
        {path:'/createFarm', element:<CreateFarm/>},
        {path:'/wallet', element:<WalletDashboard/>},
        {path:'/login', element:<Login/>},

    ]
  return (
      useRoutes(ROUTES)
  )
}