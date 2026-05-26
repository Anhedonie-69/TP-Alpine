import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Configurator from "../pages/Configurator";
import Summary from "../pages/Summary";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/configurator" element={<Configurator />} />
            <Route path="/summary" element={<Summary />} />
        </Routes>
    );
}

export default AppRouter;