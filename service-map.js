function initServiceMap() {
  const center = { lat: 53.1934, lng: -2.5215 };
  const map = new google.maps.Map(document.getElementById("service-map"), {
    center,
    zoom: 9,
    styles: [
      { featureType: "all", stylers: [{ saturation: -60 }] },
      { featureType: "road", elementType: "geometry", stylers: [{ lightness: 40 }] },
      { featureType: "poi", stylers: [{ visibility: "off" }] },
    ],
  });

  const icon = {
    path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z",
    fillColor: "#1f6f3b",
    fillOpacity: 1,
    strokeColor: "#1f6f3b",
    strokeWeight: 1,
    anchor: new google.maps.Point(12, 24),
    scale: 2,
  };

  new google.maps.Marker({
    position: center,
    map,
    icon,
    title: "Cheshire",
  });

  const locations = [
    { position: { lat: 53.144, lng: -2.362 }, title: "Sandbach" },
    { position: { lat: 53.203, lng: -2.356 }, title: "Holmes Chapel" },
    { position: { lat: 53.28, lng: -2.7 }, title: "Surrounding Areas" },
  ];

  locations.forEach((loc) => {
    const marker = new google.maps.Marker({
      position: loc.position,
      map,
      title: loc.title,
    });
    const info = new google.maps.InfoWindow({
      content: `<strong>${loc.title}</strong>`,
    });
    marker.addListener("click", () => info.open(map, marker));
  });

  const serviceCoords = [
    { lat: 53.45, lng: -3.1 },
    { lat: 53.45, lng: -2.1 },
    { lat: 53.2, lng: -1.9 },
    { lat: 52.9, lng: -2.2 },
    { lat: 52.92, lng: -3.0 },
    { lat: 53.2, lng: -3.2 },
  ];

  const serviceArea = new google.maps.Polygon({
    paths: serviceCoords,
    strokeColor: "#1f6f3b",
    strokeOpacity: 0.6,
    strokeWeight: 2,
    fillColor: "#1f6f3b",
    fillOpacity: 0.1,
  });

  serviceArea.setMap(map);
}

window.initServiceMap = initServiceMap;
