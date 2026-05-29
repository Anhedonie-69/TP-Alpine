import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { resetConfigurator } from "../../features/configurator/configuratorSlice";

function Navbar() {

    const dispatch = useDispatch();

    return (

        <header className="navbar bg-base-100 shadow-sm px-6">

            <div className="flex-1">

                <Link
                    to="/"
                    className="text-2xl font-bold italic"
                >
                    ALPINE
                </Link>

            </div>

            <div className="flex gap-4">

                <Link
                    to="/"
                    className="btn btn-ghost"
                    onClick={() => dispatch(resetConfigurator())}
                >
                    Accueil
                </Link>

                <Link
                    to="/configurator"
                    className="btn btn-primary"
                    dis
                >
                    Configurateur
                </Link>

            </div>

        </header>

    );
}

export default Navbar;
