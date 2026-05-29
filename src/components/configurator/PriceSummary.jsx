import React from "react";
import { useSelector } from "react-redux";

import useConfiguratorSummary from "../../hooks/useConfiguratorSummary";

function PriceSummary(){

    const {
        selectedVehicle,
        selectedColor,
        selectedRim,
        selectedSealing,
        selectedEquipments,
        selectedAccessories,

        vehiclePrice,
        colorPrice,
        rimPrice,
        sealingPrice,
        
        totalPrice
    } = useConfiguratorSummary();

    return (

        <div className="
            bg-base-100 
            rounded-2xl 
            shadow 
            p-4
            h-full
            flex
            flex-col
        ">

            <h2 className="text-2xl font-bold mb-4">
                Résumé
            </h2>

            <div className="space-y-2">

                <div className="space-y-2 text-sm">

                    <div className="flex justify-between">
                        <span>Modèle : {selectedVehicle?.name}</span>
                        <span>{vehiclePrice} €</span>
                    </div>

                    <div className="flex justify-between">
                        <span>Couleur : {selectedColor?.name}</span>
                        <span>{colorPrice} €</span>
                    </div>

                    <div className="flex justify-between">
                        <span>Jantes : {selectedRim?.name}</span>
                        <span>{rimPrice} €</span>
                    </div>

                    <div className="flex justify-between">
                        <span>Sièges : {selectedSealing?.name}</span>
                        <span>{sealingPrice} €</span>
                    </div>

                </div>

                <h3 className="font-bold mb-2">
                    Équipements :
                </h3>

                <div className="space-y-1 text-sm">

                    {selectedEquipments.map(item => (
                    
                        <div
                            key={item.id}
                            className="flex justify-between"
                        >
                            <span>{item.name}</span>
                            <span>+ {item.price} €</span>
                        </div>

                    ))}

                </div>

                <h3 className="font-bold mb-2">
                    Accessoires :
                </h3>

                <div className="space-y-1 text-sm">

                    {selectedAccessories.map(item => (
                    
                        <div
                            key={item.id}
                            className="flex justify-between"
                        >
                            <span>{item.name}</span>
                            <span>+ {item.price} €</span>
                        </div>

                    ))}

                </div>        
            </div>

            <div className="divider"></div>

            <p className="text-3xl font-bold">
                {totalPrice} €
            </p>

        </div>

    );
}

export default PriceSummary;