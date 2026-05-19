export const equipments = {
    design: {
        title: "Design",
        selectionType: "multiple",

        items: [
            {
                id: "design-heritage-pack",
                name: "Pack héritage",
                price: 180,
                image: "equipements/categories/design/pack-heritage.jpg",
                availableFor: ["pure", "legende"]
            },
            {
                id: "design-passenger-footrest",
                name: "Repose-pieds passager en aluminium",
                price: 96,
                image: "equipements/categories/design/repose-pied-alu.jpg",
                availableFor: ["pure", "legende"]
            }
        ]
    },

    media: {
        title: "Multimédia",
        selectionType: "single",

        items: [
            {
                id: "media-audio-standard",
                name: "Système Audio standard",
                price: 0,
                image: "equipements/categories/media et navigation/audio-standard.jpg",
                availableFor: ["pure", "legende"]
            },
            {
                id: "media-alpine-telemetrics",
                name: "Alpine Télémétrics",
                price: 204,
                image: "equipements/categories/media et navigation/alpine-metrics.jpg",
                availableFor: ["pure", "legende"]
            },
            {
                id: "media-focal",
                name: "Système Audio Focal",
                price: 600,
                image: "equipements/categories/media et navigation/audio-focal.jpg",
                availableFor: ["pure", "legende"]
            },
            {
                id: "media-focal-premium",
                name: "Système Audio Focal Premium",
                price: 1200,
                image: "equipements/categories/media et navigation/audio-premium.jpg",
                availableFor: ["pure", "legende"]
            }
        ]
    },

    confort: {
        title: "Confort",
        selectionType: "multiple",

        items: [
            {
                id: "comfort-electrochrome-mirror",
                name: "Rétroviseur intérieur électrochrome",
                price: 0,
                image: "equipements/categories/confort/retro-int-electrochrome.jpg",
                availableFor: ["pure", "legende"]
            },
            {
                id: "comfort-electric-mirrors",
                name: "Rétroviseurs extérieurs chauffants rabattables électriquement",
                price: 504,
                image: "equipements/categories/confort/retro-ext-chauffant.jpg",
                availableFor: ["pure", "legende"]
            },
            {
                id: "comfort-storage-pack",
                name: "Pack de rangement",
                price: 504,
                image: "equipements/categories/confort/pack-rangement.jpg",
                availableFor: ["pure", "legende"]
            },
            {
                id: "comfort-cruise-control",
                name: "Régulateur / limiteur de vitesse",
                price: 0,
                image: "equipements/categories/confort/regul-limit-vitesse.jpg",
                availableFor: ["pure", "legende"]
            }
        ]
    },

    conduite: {
        title: "Aide à la conduite",
        selectionType: "single",

        items: [
            {
                id: "driving-rear-parking-assist",
                name: "Aide au stationnement AR",
                price: 420,
                image: "equipements/categories/conduite/aide-stationnement-ar.jpg",
                availableFor: ["pure", "legende"]
            },
            {
                id: "driving-front-rear-parking-assist",
                name: "Aide au stationnement AV et AR",
                price: 750,
                image: "equipements/categories/conduite/aide-stationnement-av-ar.jpg",
                availableFor: ["pure", "legende"]
            },
            {
                id: "driving-camera-pack",
                name: "Aide au stationnement AV/AR et caméra de recul",
                price: 1200,
                image: "equipements/categories/conduite/camera-recul.jpg",
                availableFor: ["pure", "legende"]
            },
            {
                id: "driving-sport-exhaust",
                name: "Échappement Sport actif",
                price: 1500,
                image: "sequipements/categories/conduite/echappement-sport.jpg",
                availableFor: ["pure", "legende"]
            }
        ]
    },

    security: {
        title: "Sécurité",
        selectionType: "multiple",

        items: [
            {
                id: "security-high-performance-brakes",
                name: "Système de freinage Haute Performance 320mm",
                price: 1000,
                image: "equipements/categories/securite/freinage-haute-perf.jpg",
                availableFor: ["pure", "legende"]
            },
            {
                id: "security-emergency-braking",
                name: "Assistance au freinage d'urgence",
                price: 0,
                image: "equipements/categories/securite/aide-freinage-durgence.jpg",
                availableFor: ["pure", "legende"]
            },
            {
                id: "security-front-airbags",
                name: "Airbags frontaux conducteur et passager",
                price: 0,
                image: "equipements/categories/securite/airbag.jpg",
                availableFor: ["pure", "legende"]
            }
        ]
    },

    outside: {
        title: "Extérieur",
        selectionType: "single",

        items: [
            {
                id: "outside-blue-brake-calipers",
                name: "Étriers de frein couleur Bleu Alpine",
                price: 384,
                image: "equipements/categories/personnalisation exterieure/etrier-bleu.jpg",
                availableFor: ["pure", "legende"]
            },
            {
                id: "outside-front-wing-logo",
                name: "Logo Alpine sur les ailes avant",
                price: 120,
                image: "equipements/categories/personnalisation exterieure/logo-alpine.jpg",
                availableFor: ["pure", "legende"]
            },
            {
                id: "outside-grey-brake-calipers",
                name: "Étriers de frein couleur Gris Anthracite",
                price: 0,
                image: "equipements/categories/personnalisation exterieure/etrier-gris.jpg",
                availableFor: ["pure", "legende"]
            }
        ]
    },

    inside: {
        title: "Intérieur",
        selectionType: "multiple",

        items: [
            {
                id: "inside-aluminium-pedals",
                name: "Pédalier en aluminium",
                price: 120,
                image: "equipements/categories/personnalisation interieure/pedal-alu.jpg",
                availableFor: ["pure", "legende"]
            },
            {
                id: "inside-carbon-trim",
                name: "Harmonie carbone mat",
                price: 0,
                image: "equipements/categories/personnalisation interieure/pack-carbone.jpg",
                availableFor: ["pure", "legende"]
            },
            {
                id: "inside-blue-steering-logo",
                name: "Logo au centre du volant en Bleu Alpine",
                price: 84,
                image: "equipements/categories/personnalisation interieure/logo-volant.jpg",
                availableFor: ["pure", "legende"]
            },
            {
                id: "inside-heated-seats",
                name: "Sièges chauffants",
                price: 400,
                image: "equipements/categories/personnalisation interieure/siege-chauffant.jpg",
                availableFor: ["pure", "legende"]
            }
        ]
    }
}