import React from "react";
import { useSelector } from "react-redux";

import { vehicles } from "../../data/vehicles";
import { colors } from "../../data/colors";
import { rims } from "../../data/rims";
import { sealings } from "../../data/sealings";
import { equipments } from "../../data/equipments";
import { accessories } from "../../data/accessories";

function PriceSummary(){

    const sumCategory = (items, data) => {
       if (!items || !data) return 0;

       let total = 0;

       for (const category in items) {
           const value = items[category];

           const categoryData = data[category];

           if (!categoryData) continue;

           if (Array.isArray(value)) {
               value.forEach(id => {
                   const item = categoryData.items.find(i => i.id === id);
                   if (item) total += item.price;
               });
           } else {
               const item = categoryData.items.find(i => i.id === value);
               if (item) total += item.price;
           }
       }

       return total;
    };

    const getSelectedItems = (stateItems, data) => {

        const result = [];

        for (const category in stateItems) {

            const value = stateItems[category];

            const categoryData = data[category];

            if (!categoryData) continue;

            // MULTIPLE
            if (Array.isArray(value)) {

                value.forEach(id => {

                    const item = categoryData.items.find(i => i.id === id);

                    if (item) result.push(item);
                });
            }

            // SINGLE
            else if (value) {

                const item = categoryData.items.find(i => i.id === value);

                if (item) result.push(item);
            }
        }

        return result;
    };

    const vehicleState = useSelector(
        state => state.configurator.vehicle
    );

    const selectedVehicle = vehicles.find(
        v => v.id === vehicleState.model
    );

    const selectedColor = colors.find(
        c => c.id === vehicleState.color
    );

    const selectedRim = rims.find(
        r => r.id === vehicleState.rim
    );

    const selectedSealing = sealings.find(
        s => s.id === vehicleState.interior
    );

    const equipmentsState = useSelector(state => state.configurator.equipments);
    const accessoriesState = useSelector(state => state.configurator.accessories);

    const selectedEquipments =
        getSelectedItems(equipmentsState, equipments);
    
    const selectedAccessories =
        getSelectedItems(accessoriesState, accessories);

    const vehiclePrice = vehicleState.price || 0;
    const colorPrice = selectedColor.price || 0;
    const rimPrice = selectedRim.price || 0;
    const sealingPrice = selectedSealing.price || 0;

    const equipmentPrice = sumCategory(equipmentsState, equipments);
    const accessoryPrice = sumCategory(accessoriesState, accessories);

    const totalPrice = vehiclePrice + colorPrice + rimPrice + sealingPrice + equipmentPrice + accessoryPrice;

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