import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import {EnokiFlowProvider} from "@mysten/enoki/react";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <EnokiFlowProvider  apiKey="enoki_public_8db3e6200e6ff6bc10945b09b149f09c">
              <App />
          </EnokiFlowProvider>
      </BrowserRouter>
  </StrictMode>,
)
