import React from "react";

const BASE_IMG_CONFIG = "../../assets/images/configurateur/"

function OptionCard({ option, selected, onClick }) {

    const img = new URL(BASE_IMG_CONFIG + option.image, import.meta.url)

    return (

        <div
    onClick={onClick}
    className={`
        card
        card-side
        bg-base-100
        shadow-md
        border-2
        transition-all
        cursor-pointer
        min-w-[320px]

        ${
            selected
                ? `
                    border-primary
                    ring
                    ring-primary/30
                    scale-[1.02]
                  `
                : `
                    border-base-300
                    hover:border-primary
                  `
        }
    `}
>

            {/* IMAGE */}

            <figure className="w-32 h-32 flex-shrink-0">

                <img
                    src={img}
                    alt={option.name}
                    className="
                        w-full
                        h-full
                        object-cover
                    "
                />

            </figure>

            {/* CONTENT */}

            <div className="card-body p-4 justify-center">

                <h2 className="card-title text-base">

                    {option.name}

                </h2>

                <p className="text-primary font-bold">

                    {option.price} €

                </p>

            </div>

        </div>

    );
}

export default OptionCard;