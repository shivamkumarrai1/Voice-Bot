import React, { useState } from 'react';
import './App.css'; // We'll define styling here too

const App = () => {
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [botResponse, setBotResponse] = useState('');
    const [isResponding, setIsResponding] = useState(false);

    const startListening = () => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        if (!SpeechRecognition) {
            alert("Your browser doesn't support Speech Recognition");
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.lang = 'en-US';
        recognition.interimResults = false;

        recognition.onstart = () => setIsListening(true);
        recognition.onend = () => setIsListening(false);

        recognition.onresult = async(event) => {
            const userMessage = event.results[0][0].transcript;
            setTranscript(userMessage);
            await fetchResponse(userMessage);
        };

        recognition.start();
    };

    const speak = (text) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        const voice = window.speechSynthesis.getVoices().find(v => v.name.includes("Google") || v.default);
        if (voice) utterance.voice = voice;
        window.speechSynthesis.speak(utterance);
    };

    const fetchResponse = async(userMessage) => {
        setIsResponding(true);

        try {
            const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${process.env.REACT_APP_OPENROUTER_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: "openai/gpt-3.5-turbo",
                    messages: [
                        { role: "system", content: "You are a helpful voice assistant. Respond clearly and politely." },
                        { role: "user", content: userMessage }
                    ]
                })
            });

            const data = await response.json();
            const reply = data.choices[0].message.content;
            setBotResponse(reply);
            speak(reply);
        } catch (error) {
            console.error(error);
            speak("Sorry, something went wrong.");
            setBotResponse("Sorry, something went wrong.");
        }

        setIsResponding(false);
    };

    return ( <
        div className = "app-container" >
        <
        h1 > ChatGPT VoiceBot < /h1> <
        button onClick = { startListening }
        disabled = { isListening || isResponding } > { isListening ? '🎤 Listening...' : isResponding ? '🤖 Responding...' : '🎙️ Start Talking' } <
        /button>

        <
        div className = "card" >
        <
        p > < strong > You said: < /strong> {transcript || "—"}</p >
        <
        p > < strong > Bot said: < /strong> {botResponse || "—"}</p >
        <
        /div> < /
        div >
    );
};

export default App;