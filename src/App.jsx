import { useRoutes} from "react-router-dom";
import HomePage from "./pages/home.jsx";

export default function App() {
    const ROUTES = [
        {path:'/', element:<HomePage/>}

    ]
  return (
      useRoutes(ROUTES)
  )
}