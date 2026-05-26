import React from "react";
import { useDispatch, useSelector } from "react-redux";

import OptionCard from "../OptionCard";
import CardViewer from "../CardViewer";

import { accessories } from "../../../data/accessories";
import { toggleAccessory } from "../../../features/configurator/configuratorSlice";

function AccessoryStep(){

    const dispatch = useDispatch();
    const model = useSelector(state => state.configurator.vehicle.model);
    const selected = useSelector(state => state.configurator.accessories);
    
    return (
        <div>

            <h2 className="text-lg font-semibold mb-2">
                Choisissez vos accessoires
            </h2>

            {Object.entries(accessories).map(([categoryKey, category]) => (

                <div key={categoryKey} className="mb-6">

                    <h3 className="font-bold mb-2">
                        {category.title}
                    </h3>

                    <CardViewer>

                        {category.items
                            .filter(item => item.availableFor.includes(model))
                            .map(item => {

                                const isSelected =
                                    selected?.[categoryKey]?.includes(item.id);

                                return (
                                    <OptionCard
                                        key={item.id}
                                        option={item}
                                        selected={isSelected}
                                        onClick={() =>
                                            dispatch(toggleAccessory({
                                                category: categoryKey,
                                                itemId: item.id
                                            }))
                                        }
                                    />
                                );
                            })}
                    </CardViewer>

                </div>
            ))}
        </div>
    );
}

export default AccessoryStep;