import { useRoutes} from "react-router-dom";
import HomePage from "./pages/home.jsx";
import InvestorDashboard from "./pages/investorDashboard.jsx";
import InvestorWallet from "./pages/investorWallet.jsx";

export default function App() {
    const ROUTES = [
        {path:'/', element:<HomePage/>},
        {path:'/investorDashboard', element:<InvestorDashboard/>},
        {path:'/investorWallet', element:<InvestorWallet/>},

    ]
  return (
      useRoutes(ROUTES)
  )
}