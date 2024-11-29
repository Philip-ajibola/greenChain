import { useRoutes} from "react-router-dom";
import HomePage from "./pages/home.jsx";
import InvestorDashBoard from "./pages/investorDashBoard.jsx";

export default function App() {
    const ROUTES = [
        {path:'/', element:<HomePage/>},
        {path:'/investorDashboard', element:<InvestorDashBoard/>}

    ]
  return (
      useRoutes(ROUTES)
  )
}