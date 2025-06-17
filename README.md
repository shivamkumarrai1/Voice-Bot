# 🎙️ ChatGPT VoiceBot

A simple browser-based voice bot using OpenRouter (ChatGPT) API that responds to human questions as if in a job interview.

## 🚀 Live Demo

🔗 [Try it now](https://voice-bot-phi.vercel.app) — works best on **Chrome** (mic permissions required).

## 🧠 Features

- 🎤 Voice-to-text input using browser speech recognition
- 🤖 AI-generated answers powered by GPT-4o (via OpenRouter API)
- 🔊 Text-to-speech response using browser's built-in voice
- ⚡ Lightweight, no login or installation required

## 📌 Sample Questions It Handles

Ask it anything — especially:

- What’s your #1 superpower?
- What’s your life story in a few sentences?
- What are the top 3 areas you’d like to grow in?
- What misconception do your coworkers have about you?
- How do you push your boundaries and limits?

## 🧰 Tech Stack

- React.js
- OpenRouter API (using GPT-4o or GPT-3.5-turbo)
- Web Speech API (SpeechRecognition + SpeechSynthesis)

## 📁 Project Structure

VoiceBot/
├── public/
│ └── index.html, icons, etc.
├── src/
│ ├── App.js
│ ├── App.css
│ └── index.js
├── .env
└── README.md


## 🔐 Environment Variable

Create a `.env` file in the root:

```env
REACT_APP_OPENROUTER_API_KEY=your_openrouter_api_key
🔑 You can get a free API key from https://openrouter.ai

🛠️ Setup Instructions

git clone https://github.com/shivamkumarrai1/Voice-Bot.git
cd Voice-Bot
npm install
npm start

🌐 Deployment
Deployed with Vercel
👉 Link: https://voice-bot-phi.vercel.app

⚠️ Browser Support
✅ Fully tested on Google Chrome

⚠️ Brave/Firefox may block mic permissions — Chrome is recommended.
