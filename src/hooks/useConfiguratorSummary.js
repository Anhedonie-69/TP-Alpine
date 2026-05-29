import { useSelector } from "react-redux";

import {
    sumCategory,
    getSelectedItems
} from "../utils/configuratorSummary";

import { vehicles } from "../data/vehicles";
import { colors } from "../data/colors";
import { rims } from "../data/rims";
import { sealings } from "../data/sealings";
import { equipments } from "../data/equipments";
import { accessories } from "../data/accessories";

function useConfiguratorSummary() {

    const vehicleState = useSelector(
        state => state.configurator.vehicle
    );

    const equipmentsState = useSelector(
        state => state.configurator.equipments
    );

    const accessoriesState = useSelector(
        state => state.configurator.accessories
    );

    // VEHICLE

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

    // OPTIONS

    const selectedEquipments =
        getSelectedItems(equipmentsState, equipments);

    const selectedAccessories =
        getSelectedItems(accessoriesState, accessories);

    // PRICES

    const vehiclePrice = vehicleState.price || 0;

    const colorPrice = selectedColor?.price || 0;

    const rimPrice = selectedRim?.price || 0;

    const sealingPrice = selectedSealing?.price || 0;

    const equipmentPrice =
        sumCategory(equipmentsState, equipments);

    const accessoryPrice =
        sumCategory(accessoriesState, accessories);

    const totalPrice =
        vehiclePrice +
        colorPrice +
        rimPrice +
        sealingPrice +
        equipmentPrice +
        accessoryPrice;

    return {
        vehicleState,

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

        equipmentPrice,
        accessoryPrice,

        totalPrice
    };
}

export default useConfiguratorSummary;