const map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -2
});

const bounds = [
    [0, 0],
    [1000, 1000]
];

L.imageOverlay('image.png', bounds).addTo(map);

map.fitBounds(bounds);
