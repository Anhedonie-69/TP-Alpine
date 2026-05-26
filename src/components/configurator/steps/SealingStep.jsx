import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { setSealing } from "../../../features/configurator/configuratorSlice";

import { vehicles } from "../../../data/vehicles";
import { sealings } from "../../../data/sealings";

import OptionCard from "../OptionCard";
import CardViewer from "../CardViewer";

function SealingStep(){

    const dispatch = useDispatch();

    const currentModel = useSelector(
        state => state.configurator.vehicle.model
    );

    const currentSealing = useSelector(
        state => state.configurator.vehicle.interior
    );

    const selectedVehicle = vehicles.find(
        vehicle => vehicle.id === currentModel
    );

    const availableSealings = sealings.filter(
        sealing =>
            selectedVehicle.availableSealings.includes(
                sealing.id
            )
    );


    return (
        <div>

            <h2 className="text-lg font-semibold mb-2">
                Choisissez un siège
            </h2>

            <CardViewer>

                {availableSealings.map((sealing) =>(
                    <OptionCard
                        key={sealing.id}
                        option={sealing}
                        onClick={() =>
                            dispatch(setSealing(sealing.id))
                        }
                    />
                ))}
            </CardViewer>

        </div>
    );
}

export default SealingStep;