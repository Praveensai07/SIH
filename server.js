
import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dangerZones = JSON.parse(
  fs.readFileSync(path.join(__dirname, "dangerZones.json"), "utf-8")
);


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/* ================= MIDDLEWARE ================= */
app.use(cors());
app.use(express.json());

/* ================= ENV ================= */
const API_KEY = process.env.API_KEY;                 // OpenWeather
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;   // OpenAI
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

/* ================= STATIC DATA ================= */


/* ================= HEALTH CHECK ================= */
app.get("/", (req, res) => {
  res.send("🚨 Jharkhand Tourist Platform API running");
});

/* =================================================
   🤖 AI CHAT (OpenAI Proxy)
================================================= */
app.post("/api/ai", async (req, res) => {
  if (!OPENAI_API_KEY) {
    return res.status(500).json({ error: "OpenAI API key not set" });
  }

  try {
    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify(req.body)
      }
    );

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    console.error("OpenAI error:", err);
    res.status(500).json({ error: "OpenAI API error" });
  }
});

/* =================================================
   🌦️ WEATHER API
================================================= */
app.get("/api/weather", async (req, res) => {
  const city = req.query.city;
  if (!city) {
    return res.status(400).json({ error: "City parameter is required" });
  }

  try {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      city
    )}&appid=${API_KEY}&units=metric`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    res.json(data);
  } catch (err) {
    console.error("Weather error:", err);
    res.status(500).json({ error: "Weather API error" });
  }
});

/* =================================================
   🚨 DANGER ZONES
================================================= */
app.get("/api/danger-zones", (req, res) => {
  res.json(dangerZones);
});

/* =================================================
   🆘 SOS → TELEGRAM ALERT
================================================= */
app.post("/api/sos", async (req, res) => {
  const { lat, lng } = req.body;

  if (!lat || !lng) {
    return res.status(400).json({ success: false, error: "Location missing" });
  }

  const message = `
🚨 *SOS ALERT*
A tourist needs help!

📍 Latitude: ${lat}
📍 Longitude: ${lng}

🗺️ https://www.google.com/maps?q=${lat},${lng}
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
    console.error("Telegram error:", err);
    res.status(500).json({ success: false });
  }
});

/* ================= START SERVER ================= */
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
