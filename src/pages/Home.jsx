import React from "react";
import { Link } from "react-router-dom";

import { vehicles } from "../data/vehicles";

const BASE_IMG_CONFIG = "../assets/images/configurateur/"

function Home() {

    const img = new URL(BASE_IMG_CONFIG + vehicles[0].image, import.meta.url)

    return (

        <div className="bg-base-100">

            {/* HERO */}

            <section className="hero min-h-[85vh]">

                <div className="hero-content flex-col lg:flex-row-reverse gap-16">

                    <img
                        src={img}
                        className="max-w-xl rounded-lg"
                        alt="Alpine A110"
                    />

                    <div className="max-w-xl">

                        <h1 className="text-6xl font-bold uppercase">
                            Alpine A110
                        </h1>

                        <p className="py-6 text-lg">

                            Configurez votre Alpine idéale parmi
                            de nombreuses options, équipements
                            et accessoires.

                        </p>

                        <Link
                            to="/configurator"
                            className="btn btn-primary btn-lg"
                        >
                            Commencer la configuration
                        </Link>

                    </div>

                </div>

            </section>

        </div>

    );
}

export default Home;