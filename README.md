# Jharkhand Journey Web App

This project is a web application for exploring the culture, weather, and attractions of Jharkhand. It features:
- Live weather updates (OpenWeatherMap API, via backend)
- AI chatbox (OpenAI API, via backend)
- Cultural and tourism information

## Features
- **Weather:** Get live weather for any city using a secure backend proxy.
- **AI Chatbox:** Chat with "Prakruthi" using OpenAI's GPT model, securely via backend.
- **Frontend:** Modern, responsive UI with cultural and tourism content.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [npm](https://www.npmjs.com/)

### Installation
1. **Clone the repository:**
   ```
   git clone https://github.com/yourusername/jharkhand-journey.git
   cd jharkhand-journey
   ```
2. **Install backend dependencies:**
   ```
   npm install
   ```
3. **Create a `.env` file in the project root:**
   ```
   API_KEY=your_openweathermap_api_key
   OPENAI_API_KEY=your_openai_api_key
   ```
   - Get your OpenWeatherMap API key from https://openweathermap.org/api
   - Get your OpenAI API key from https://platform.openai.com/account/api-keys

4. **Start the backend server:**
   ```
   node server.js
   ```
   The backend will run on `http://localhost:3001` by default.

5. **Open `index.html` in your browser** to use the frontend.

## Security Notes
- **Never commit your `.env` file or API keys to GitHub.**
- `.env` and `node_modules/` are already in `.gitignore`.

## Project Structure
- `server.js` — Node.js backend (API proxy)
- `.env` — API keys (not committed)
- `weatherFront.html`, `AIchatBox.html`, `index.html` — Frontend files
- `images/`, `sih.css`, etc. — Assets and styles

## License
This project is for educational/demo purposes. Please check API provider terms for production use.
