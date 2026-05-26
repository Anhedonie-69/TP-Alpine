import React from "react";

function CardViewer({ children }) {

    return (

        <div
            className="
                flex
                gap-6
                overflow-x-auto
                pb-4
                snap-x
                snap-mandatory
            "
        >

            {children}

        </div>

    );
}

export default CardViewer;