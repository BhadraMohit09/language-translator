import { useState } from 'react';
import axios from 'axios';
import './Translator.css';

const fallbackLanguages = [
  { code: 'af', name: 'Afrikaans' },
  { code: 'ar', name: 'Arabic' },
  { code: 'bn', name: 'Bengali' },
  { code: 'bg', name: 'Bulgarian' },
  { code: 'zh', name: 'Chinese (Simplified)' },
  { code: 'zh-TW', name: 'Chinese (Traditional)' },
  { code: 'hr', name: 'Croatian' },
  { code: 'cs', name: 'Czech' },
  { code: 'da', name: 'Danish' },
  { code: 'nl', name: 'Dutch' },
  { code: 'en', name: 'English' },
  { code: 'et', name: 'Estonian' },
  { code: 'fi', name: 'Finnish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'el', name: 'Greek' },
  { code: 'gu', name: 'Gujarati' },
  { code: 'he', name: 'Hebrew' },
  { code: 'hi', name: 'Hindi' },
  { code: 'hu', name: 'Hungarian' },
  { code: 'id', name: 'Indonesian' },
  { code: 'it', name: 'Italian' },
  { code: 'ja', name: 'Japanese' },
  { code: 'kn', name: 'Kannada' },
  { code: 'ko', name: 'Korean' },
  { code: 'lv', name: 'Latvian' },
  { code: 'lt', name: 'Lithuanian' },
  { code: 'ml', name: 'Malayalam' },
  { code: 'mr', name: 'Marathi' },
  { code: 'ne', name: 'Nepali' },
  { code: 'no', name: 'Norwegian' },
  { code: 'pa', name: 'Punjabi' },
  { code: 'pl', name: 'Polish' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'ro', name: 'Romanian' },
  { code: 'ru', name: 'Russian' },
  { code: 'sr', name: 'Serbian' },
  { code: 'si', name: 'Sinhala' },
  { code: 'sk', name: 'Slovak' },
  { code: 'sl', name: 'Slovenian' },
  { code: 'es', name: 'Spanish' },
  { code: 'sv', name: 'Swedish' },
  { code: 'ta', name: 'Tamil' },
  { code: 'te', name: 'Telugu' },
  { code: 'th', name: 'Thai' },
  { code: 'tr', name: 'Turkish' },
  { code: 'uk', name: 'Ukrainian' },
  { code: 'ur', name: 'Urdu' },
  { code: 'vi', name: 'Vietnamese' },
];

const Translator = () => {
  const [input, setInput] = useState('');
  const [targetLang, setTargetLang] = useState('en');
  const [languages] = useState(fallbackLanguages);
  const [result, setResult] = useState('');

  const API_KEY = 'AIzaSyBoIutA6ySUwPSQCUyavTuHqx6nFwDai5g'; // Replace with your key

  const handleTranslate = async () => {
    if (!input.trim()) return;

    try {
      const response = await axios.post(
        `https://translation.googleapis.com/language/translate/v2`,
        {},
        {
          params: {
            q: input,
            target: targetLang,
            key: API_KEY,
          },
        }
      );
      const translatedText = response.data.data.translations[0].translatedText;
      setResult(translatedText);
    } catch (err) {
      console.error('Translation failed:', err);
      setResult('Translation failed. Check your API key or try again later.');
    }
  };

  return (
    <div className="translator-container">
      <div className="translator-card">
        <h2 className="title">🌌 Space Translator</h2>

        <textarea
          className="text-input"
          rows={5}
          placeholder="🚀 Enter your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <div className="controls">
          <select
            value={targetLang}
            onChange={(e) => setTargetLang(e.target.value)}
            className="dropdown"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
          <button className="translate-btn" onClick={handleTranslate}>
            Translate 🔁
          </button>
        </div>

        {result && (
          <div className="result-box">
            <h4>🛰️ Translated Text:</h4>
            <p>{result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Translator;
