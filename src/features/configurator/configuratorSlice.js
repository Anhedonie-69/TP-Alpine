import { createSlice } from "@reduxjs/toolkit";

import { vehicles } from "../../data/vehicles";
import { equipments as equipmentConfig } from "../../data/equipments";
import { accessories as accessoryConfig } from "../../data/accessories";

const initialEquipments = {
    design: [],
    media: "media-audio-standard",
    confort: [],
    conduite: "driving-rear-parking-assist",
    security: [],
    outside: "outside-grey-brake-calipers",
    inside: []
};

const initialAccessories = {
    transportProtection: [],
    multimedia: [],
    interior: [],
    garage: [],
    exterior: []
};

const initialState = {
    currentStep: 1,

    vehicle: {
        model: "pure",
        color: "white",
        rim: "standard",
        interior: "blackDinamica",
        price: 54700
    },

    equipments: initialEquipments,
    accessories: initialAccessories,

    totalPrice: 0,
}

export const configuratorSlice = createSlice({
    name: 'configurator',
    initialState,
    reducers: {
        // STEPS
        nextStep: (state, action) => {
            if (state.currentStep < 7) {
                state.currentStep += 1
            }
        },
        prevStep: (state, action) => {
            if (state.currentStep > 1) {
                state.currentStep -= 1
            }
        },
        goToStep: (state, action) => {
            state.currentStep = action.payload
        },
        resetConfigurator: () => structuredClone(initialState),

        // SELECTIONS
        setModel: (state, action) => {
            state.vehicle.model = action.payload;

            const vehicle = vehicles.find(
                v => v.id === action.payload
            );

            // Reste dépendances
        
            state.vehicle.color = vehicle.availableColors[2];
            state.vehicle.rim = vehicle.availableRims[0];
            state.vehicle.interior = vehicle.availableSealings[0];
            state.equipments = structuredClone(initialEquipments);
            state.accessories = structuredClone(initialAccessories);

            state.vehicle.price = vehicle.price;
        },

        setColor: (state, action) => {
            state.vehicle.color = action.payload;
        },

        setRim: (state, action) => {      
            state.vehicle.rim = action.payload;       
        },

        setSealing: (state, action) => {
            state.vehicle.interior = action.payload;
        },

        // Equipements
        toggleEquipment: (state, action) => {
            const { category, itemId } = action.payload;

            const config = equipmentConfig[category];

            if (!config) return;

            const current = state.equipments[category];

            // MULTIPLE
            if (config.selectionType === "multiple") {
            
                if (!Array.isArray(current)) {
                    state.equipments[category] = [];
                }
            
                const list = state.equipments[category];
            
                if (list.includes(itemId)) {
                    state.equipments[category] = list.filter(id => id !== itemId);
                } else {
                    list.push(itemId);
                }
            }
        
            // SINGLE
            else {
                state.equipments[category] = itemId;
            }
        },
        // Accessoires
        toggleAccessory: (state, action) => {
            const { category, itemId } = action.payload;

            const config = accessoryConfig[category];

            if (!config) return;

            const current = state.accessories[category];

            // MULTIPLE (tout est multiple ici, mais on reste générique)
            if (config.selectionType === "multiple") {
            
                if (!Array.isArray(current)) {
                    state.accessories[category] = [];
                }
            
                const list = state.accessories[category];
            
                if (list.includes(itemId)) {
                    state.accessories[category] = list.filter(id => id !== itemId);
                } else {
                    list.push(itemId);
                }
            }
        
            // SINGLE (au cas où tu ajoutes plus tard)
            else {
                state.accessories[category] = itemId;
            }
        },
    },
})

export const { 
    nextStep, 
    prevStep, 
    goToStep, 
    resetConfigurator,

    setModel,
    setColor,
    setRim,
    setSealing,
    toggleEquipment,
    toggleAccessory

} = configuratorSlice.actions;

export default configuratorSlice.reducer;