import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { setRim } from "../../../features/configurator/configuratorSlice";

import { vehicles } from "../../../data/vehicles";
import { rims } from "../../../data/rims";

import OptionCard from "../OptionCard";
import CardViewer from "../CardViewer";

function RimStep() {

    const dispatch = useDispatch();

    const currentModel = useSelector(
        state => state.configurator.vehicle.model
    );

    const currentRim = useSelector(
        state => state.configurator.vehicle.rim
    );

    const selectedVehicle = vehicles.find(
        vehicle => vehicle.id === currentModel
    );

    const availableRims = rims.filter(
        rim =>
            selectedVehicle.availableRims.includes(
                rim.id
            )
    );

    return (

        <div>

            <h2 className="text-lg font-semibold mb-2">
                Choisissez vos jantes
            </h2>

            <CardViewer>

                {availableRims.map(rim => (

                    <OptionCard
                        key={rim.id}
                        option={rim}
                        isSelected={
                            currentRim === rim.id
                        }
                        onClick={() =>
                            dispatch(setRim(rim.id))
                        }
                    />

                ))}

            </CardViewer>

        </div>

    );
}

export default RimStep;