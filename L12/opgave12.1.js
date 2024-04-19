// opgave12.1.js
const earthquakeUrl = // https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php 
    'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson';

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

async function getEarthquakes() {
    const earthquakes = await get(earthquakeUrl);
    console.log(earthquakes);
    let features = Array.from(earthquakes.features)
    console.log(features);
    return features.filter(e => e.properties.mag > 5).sort((a, b) => b.properties.mag - a.properties.mag);
}

function generateEarthquakeTable(earthquakes) {
    let html = '<table>';
    console.log(earthquakes);
    for (earthquake of earthquakes) {
        html += '<tr><td>' + earthquake.properties.mag +
            '</td><td>' + earthquake.properties.place +
            '</td><td>' + earthquake.properties.time +
            '</td></tr>\n';
    }
    html += '</table><br><div></div>';
    return html;
}

async function main() {
    const earthquakes = await getEarthquakes();
    document.body.innerHTML = generateEarthquakeTable(earthquakes);
}

main();