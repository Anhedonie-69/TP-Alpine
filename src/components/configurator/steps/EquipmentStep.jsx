import React from "react";
import { useDispatch, useSelector } from "react-redux";

import OptionCard from "../OptionCard";
import CardViewer from "../CardViewer";

import { equipments } from "../../../data/equipments";
import { toggleEquipment } from "../../../features/configurator/configuratorSlice";

function EquipmentStep() {

    const dispatch = useDispatch();

    const selected = useSelector(state => state.configurator.equipments);

    return (
        <div>

            <h2 className="text-lg font-semibold mb-2">
                Choisissez vos équipements
            </h2>

            {Object.entries(equipments).map(([categoryKey, category]) => (

                <div key={categoryKey}>

                    <h2>{category.title}</h2>

                    <CardViewer>

                        {category.items.map(item => {

                            const isSelected =
                                category.selectionType === "single"
                                    ? selected[categoryKey] === item.id
                                    : selected[categoryKey]?.includes(item.id);

                            return (
                                <OptionCard
                                    key={item.id}
                                    option={item}
                                    selected={isSelected}
                                    onClick={() =>
                                        dispatch(toggleEquipment({
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

export default EquipmentStep;