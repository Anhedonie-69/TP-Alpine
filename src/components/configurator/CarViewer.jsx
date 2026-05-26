import React, { useState } from "react";
import { useSelector } from "react-redux";
import { vehicleImages } from "../../data/vehicleImages";

const BASE = "../../assets/images/configurateur/";

function CarViewer() {
    const step = useSelector(s => s.configurator.currentStep);

    const model = useSelector(s => s.configurator.vehicle.model);
    const color = useSelector(s => s.configurator.vehicle.color);
    const rim = useSelector(s => s.configurator.vehicle.rim);
    const interior = useSelector(s => s.configurator.vehicle.interior);

    const [index, setIndex] = useState(0);

let views = [];

if (step === 4) {
    views = vehicleImages?.interior?.[interior]?.views || [];
}

else if (step === 3) {
    const rimView = vehicleImages?.rims?.[rim]?.[color];
    views = rimView ? rimView.views : [];
}

else {
    views =
        vehicleImages?.exterior?.[model]?.[color]?.[rim]?.views || [];
}

    const safeIndex = views.length ? index % views.length : 0;
    const image = views[safeIndex];

    const next = () => {
        if (!views.length) return;
        setIndex(i => (i + 1) % views.length);
    };

    const prev = () => {
        if (!views.length) return;
        setIndex(i => (i - 1 + views.length) % views.length);
    };

    if (!image) {
        return (
            <div className="bg-base-100 p-4 rounded-2xl">
                <p>Aucune image</p>
            </div>
        );
    }

    return (

        <div className="bg-white rounded-2xl shadow p-4 relative flex items-center justify-center">

            <button className="btn btn-circle absolute left-2" onClick={prev}>
                ❮
            </button>

            <img
                src={new URL(BASE + image, import.meta.url)}
                className="max-h-[320px] object-contain"
            />

            <button className="btn btn-circle absolute right-2" onClick={next}>
                ❯
            </button>

        </div>
        
    );
}

export default CarViewer;