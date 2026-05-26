import React from "react";

import { useDispatch, useSelector } from "react-redux";

import {
    nextStep,
    prevStep
} from "../../features/configurator/configuratorSlice";

function StepNavigation() {

    const dispatch = useDispatch();

    const step = useSelector(
        state => state.configurator.currentStep
    );

    const steps = [
        "Modèle",
        "Couleur",
        "Jantes",
        "Sellerie",
        "Équipements",
        "Accessoires",
        "Résumé"
    ];

    return (

        <div
            className="
                flex
                items-center
                justify-between
                bg-base-100
                rounded-2xl
                shadow
                px-4
                py-2
            "
        >

            {/* Previous */}

            <button
                className="btn btn-outline btn-sm"
                onClick={() => dispatch(prevStep())}
                disabled={step === 1}
            >
                ← {steps[step - 2] || "Précédent"}
            </button>

            {/* Current */}

            <div className="text-center">

                <p className="text-sm opacity-70">
                    Progression
                </p>

                <h2 className="text-base font-bold">

                    {steps[step - 1]}

                </h2>

                <progress
                    className="progress progress-primary w-56 mt-2"
                    value={step}
                    max="7"
                ></progress>

            </div>

            {/* Next */}

            <button
                className="btn btn-primary btn-sm"
                onClick={() => dispatch(nextStep())}
                disabled={step === 7}
            >
                {steps[step] || "Suivant"} →
            </button>

        </div>

    );
}

export default StepNavigation;