import React from "react";
import { useSelector } from "react-redux";
import { nextStep, prevStep, goToStep, resetConfigurator } from '../features/configurator/configuratorSlice';

import ConfiguratorLayout from "../components/configurator/ConfiguratorLayout";

import ModelStep from "../components/configurator/steps/ModelStep";
import ColorStep from "../components/configurator/steps/ColorStep";
import RimStep from "../components/configurator/steps/RimStep";
import SealingStep from "../components/configurator/steps/SealingStep";
import EquipmentStep from "../components/configurator/steps/EquipmentStep";
import AccessoryStep from "../components/configurator/steps/AccessoryStep";
import StepNavigation from "../components/configurator/StepNavigation";
 
function Configurator() {
    const step = useSelector(state => state.configurator.currentStep);

    let currentStepComponent;

    switch (step) {

        case 1:
            currentStepComponent = <ModelStep />;
        break;

        case 2:
            currentStepComponent = <ColorStep />;
        break;

        case 3:
            currentStepComponent = <RimStep />;
        break;

        case 4:
            currentStepComponent = <SealingStep />;
        break;

        case 5:
            currentStepComponent = <EquipmentStep />;
        break;

        case 6:
            currentStepComponent = <AccessoryStep />;
        break;

        case 7:
            currentStepComponent = <div>Résumé</div>;
        break;

        default:
            currentStepComponent = <ModelStep />;
    }

    return (

        <ConfiguratorLayout>

            {currentStepComponent}

        </ConfiguratorLayout>

    );
}

export default Configurator