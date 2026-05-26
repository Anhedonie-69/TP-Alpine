import React from "react";
import { useDispatch } from "react-redux";
import { setColor } from "../../../features/configurator/configuratorSlice";

import OptionCard from "../OptionCard";
import CardViewer from "../CardViewer";

import { colors } from "../../../data/colors";

function ColorStep(){

    const dispatch = useDispatch();

    return (
        <div>

            <h2 className="text-lg font-semibold mb-2">
                Choisissez une couleur
            </h2>

            <CardViewer>

                {colors.map((color) =>(
                    <OptionCard
                        key={color.id}
                        option={color}
                        onClick={() =>
                            dispatch(setColor(color.id))
                        }
                    />
                ))}
            </CardViewer>

        </div>
    );
}

export default ColorStep;