import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { vehicleImages } from "../data/vehicleImages";

function useCarViewer() {

    const step = useSelector(
        state => state.configurator.currentStep
    );

    const {
        model,
        color,
        rim,
        interior
    } = useSelector(
        state => state.configurator.vehicle
    );

    const [index, setIndex] = useState(0);

    let views = [];

    // INTERIOR
    if (step === 4) {

        views =
            vehicleImages?.interior?.[interior]?.views || [];
    }

    // RIMS
    else if (step === 3) {

        views =
            vehicleImages?.rims?.[rim]?.[color]?.views || [];
    }

    // EXTERIOR
    else {

        views =
            vehicleImages?.exterior?.[model]?.[color]?.[rim]?.views || [];
    }

    // RESET INDEX SI CHANGEMENT DE CONFIG
    useEffect(() => {
        setIndex(0);
    }, [step, model, color, rim, interior]);

    const hasImages = views.length > 0;

    const currentImage =
        hasImages
            ? views[index % views.length]
            : null;

    const next = () => {

        if (!hasImages) return;

        setIndex(i => (i + 1) % views.length);
    };

    const prev = () => {

        if (!hasImages) return;

        setIndex(i => (i - 1 + views.length) % views.length);
    };

    return {
        currentImage,
        hasImages,
        next,
        prev
    };
}

export default useCarViewer;