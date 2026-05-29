import useCarViewer from "../../hooks/useCarViewer";

const BASE =
    "../../../public/assets/images/configurateur/";

function CarViewer() {

    const {
        currentImage,
        hasImages,
        next,
        prev
    } = useCarViewer();

    if (!hasImages) {

        return (

            <div className="
                bg-white
                rounded-2xl
                shadow
                p-4
                h-[360px]
                flex
                items-center
                justify-center
            ">
                <p className="text-gray-500">
                    Aucune image disponible
                </p>
            </div>
        );
    }

    return (

        <div className="
            bg-white
            rounded-2xl
            shadow
            p-4
            relative
            flex
            items-center
            justify-center
        ">

            <button
                className="btn btn-circle absolute left-2"
                onClick={prev}
            >
                ❮
            </button>

            <img
                src={
                    new URL(
                        BASE + currentImage,
                        import.meta.url
                    )
                }
                className="
                    max-h-[320px]
                    object-contain
                "
            />

            <button
                className="btn btn-circle absolute right-2"
                onClick={next}
            >
                ❯
            </button>

        </div>
    );
}

export default CarViewer;