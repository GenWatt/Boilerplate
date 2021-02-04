import world from "../world.json";

const options = {
    // Required: API key
    key: "tMELm6Op3L4qJDipBujrx7V9PypXpU6S", // REPLACE WITH YOUR KEY !!!

    // Put additional console output


    // Optional: Initial state of the map
    lat: 50.4,
    lon: 14.3,
    zoom: 5,
};

const boundariesStyle = {
    color: "white",
    weight: 1
}

// Initialize Windy API
windyInit(options, (windyAPI) => {
    // windyAPI is ready, and contain 'map', 'store',
    // 'picker' and other usefull stuff

    const { map, colors } = windyAPI;
    // .map is instance of Leaflet map

    colors.wind.changeColor([
        [2, [8, 4, 56]],
        [20, [8, 4, 56]]
    ])
    L.geoJSON(world, { style: boundariesStyle }).addTo(map);
});