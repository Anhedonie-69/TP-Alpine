import React from "react";
import { useDispatch } from "react-redux";
import { setModel } from "../../../features/configurator/configuratorSlice";

import OptionCard from "../OptionCard";
import CardViewer from "../CardViewer";

import { vehicles } from "../../../data/vehicles";

function ModelStep(){

    const dispatch = useDispatch();

    return (

        <div>

            <h2 className="text-lg font-semibold mb-2">
                Choisissez un modèle
            </h2>

            <CardViewer>

                {vehicles.map(vehicle => (

                    <OptionCard
                        key={vehicle.id}
                        option={vehicle}
                        onClick={() => 
                            dispatch(setModel(vehicle.id))
                        }
                    />
                ))}

            </CardViewer>

        </div>

    );
}

export default ModelStep;