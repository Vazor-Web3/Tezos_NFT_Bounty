import React from "react";
import { createRoot } from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css'

import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "swiper/swiper.css";





const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
  <Router>
  <App />
  </Router>

</React.StrictMode>,
);