require("dotenv").config();
const express = require("express");
const cors = require("cors");
const zones = require("./dangerZones.json");

const app = express();
app.use(cors());
app.use(express.json());

// 🔐 Telegram config (KEEP SECRET)
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;


// Home
app.get("/", (req, res) => {
  res.send("🚨 Jharkhand Tourist Security Alert API running");
});

// Danger zones API
app.get("/api/danger-zones", (req, res) => {
  res.json(zones);
});

// 🚨 SOS API
app.post("/api/sos", async (req, res) => {
  const { lat, lng } = req.body;

  const message = `
🚨 *SOS ALERT*
A tourist needs help!

📍 Location:
Latitude: ${lat}
Longitude: ${lng}

🗺️ Map:
https://www.google.com/maps?q=${lat},${lng}
`;

  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: "Markdown"
      })
    });

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚨 Server running on http://localhost:${PORT}`);
});
