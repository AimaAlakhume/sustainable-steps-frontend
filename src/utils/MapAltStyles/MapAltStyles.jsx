export const mutedStyles = [
    { elementType: "geometry", stylers: [{ color: "#1d251f" }] },  // Deep forest green background
    { elementType: "labels.text.stroke", stylers: [{ color: "#1d251f" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#c5c2bc" }] }, // Off-white, like recycled paper

    {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#99b38f" }],  // Light green, like new growth
    },
    {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#99b38f" }],
    },

    // Parks with a vibrant, natural green
    {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#28382a" }],
    },
    {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#66826b" }],
    },

    // Roads muted, like natural paths
    {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#282f2a" }],
    },
    {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1e221f" }],
    },
    {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#b1b8ac" }],
    },

    // Highways toned down, earthy brown
    {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#797266" }],
    },
    {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#181b19" }],
    },
    {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#e2d9c6" }],  // Light beige, like natural fibers
    },

    // Water a clear, refreshing blue
    {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#316282" }],
    },
    {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#89a5bc" }],
    },
    {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#316282" }],
    },

    // Markers
    {
        featureType: "poi.marker",
        elementType: "icon",
        stylers: [{ color: "#ffe08c" }], // Yellow
    },
    {
        featureType: "poi.marker",
        elementType: "label",
        stylers: [{ color: "#000000" }], // Black
    },
    {
        featureType: "poi.marker",
        elementType: "stroke",
        stylers: [{ color: "#000000" }], // Black
    },
];
