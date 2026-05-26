import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { goToStep } from "../../features/configurator/configuratorSlice";

function Breadcrumb() {

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

        <div className="text-sm breadcrumbs">

            <ul>

                {steps.map((stepName, index) => {

                    const stepNumber = index + 1;

                    const isActive = step === stepNumber;

                    const isPassed = step > stepNumber;

                    return (

                        <li
                            key={stepName}
                        >

                            <button

                                onClick={() =>
                                    dispatch(goToStep(stepNumber))
                                }

                                className={`
                                    transition-all

                                    ${isActive
                                        ? "font-bold text-primary"
                                        : ""
                                    }

                                    ${isPassed
                                        ? "opacity-100"
                                        : "opacity-50"
                                    }
                                `}
                            >

                                {stepName}

                            </button>

                        </li>

                    );
                })}

            </ul>

        </div>

    );
}

export default Breadcrumb;