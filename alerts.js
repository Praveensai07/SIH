const map = L.map('map').setView([23.5, 85.5], 7);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
  .addTo(map);

let dangerZones = [];
let zoneLayers = [];
let userMarker;

// Fetch zones from backend
fetch("http://localhost:3000/api/danger-zones")
  .then(res => res.json())
  .then(zones => {
    dangerZones = zones;

    zones.forEach(zone => {
      const circle = L.circle([zone.lat, zone.lng], {
        radius: zone.radius,
        color: 'red',
        fillOpacity: 0.3
      }).addTo(map);

      circle.zoneType = zone.type;
      circle.zoneData = zone;

      circle.bindPopup(`
        <b>${zone.name}</b><br>
        Type: ${zone.type}<br>
        Risk: ${zone.level}
      `);

      zoneLayers.push(circle);
    });

    startLiveTracking();
  });

// LIVE MOVEMENT TRACKING
function startLiveTracking() {
  navigator.geolocation.watchPosition(
    pos => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;

      if (!userMarker) {
        userMarker = L.marker([lat, lng])
          .addTo(map)
          .bindPopup("📍 You are here")
          .openPopup();
      } else {
        userMarker.setLatLng([lat, lng]);
      }

      checkDangerZones(lat, lng);
    },
    err => console.error(err),
    { enableHighAccuracy: true, maximumAge: 1000 }
  );
}

// CHECK DISTANCE
function checkDangerZones(lat, lng) {
  dangerZones.forEach(zone => {
    const distance = map.distance([lat, lng], [zone.lat, zone.lng]);
    if (distance <= zone.radius) {
      triggerAlert(zone);
    }
  });
}

// ALERT
function triggerAlert(zone) {
  const alertBox = document.getElementById("alertBox");
  alertBox.innerHTML = `
    🚨 ${zone.level} ALERT<br>
    ${zone.name}<br>
    ${zone.message}
  `;
  alertBox.classList.remove("hidden");
}

// FILTERS
function toggleZones(type) {
  zoneLayers.forEach(layer => {
    if (layer.zoneType === type) {
      const visible = layer.options.fillOpacity > 0;
      layer.setStyle({ fillOpacity: visible ? 0 : 0.3, opacity: visible ? 0 : 1 });
    }
  });
}
document.getElementById("sosBtn").onclick = () => {
  if (!navigator.geolocation) {
    alert("Geolocation not supported");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    pos => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;

      fetch("http://localhost:3000/api/sos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lat, lng })
      })
      .then(res => res.json())
      .then(() => {
        alert("🚨 SOS sent successfully!\nHelp is being notified.");
      })
      .catch(() => {
        alert("❌ Failed to send SOS");
      });
    },
    () => {
      alert("❌ Unable to fetch your location");
    },
    { enableHighAccuracy: true }
  );
};

// AR DEMO
document.getElementById("arBtn").onclick = () => {
  alert(
    "📱 AR MODE DEMO\n\nRed arrow points toward nearest danger zone.\nDistance updates in real time.\n(Implemented using WebXR in full version)"
  );
};

// PWA
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}
document.getElementById("locateBtn").onclick = () => {
  navigator.geolocation.getCurrentPosition(
    pos => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;

      if (!userMarker) {
        userMarker = L.marker([lat, lng])
          .addTo(map)
          .bindPopup("📍 You are here")
          .openPopup();
      } else {
        userMarker.setLatLng([lat, lng]);
      }

      map.setView([lat, lng], 15); // zoom to user
    },
    err => {
      alert("❌ Unable to fetch your location");
      console.error(err);
    },
    { enableHighAccuracy: true }
  );
};
