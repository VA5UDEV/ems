import { useState, useEffect } from "react";

const quotes = [
  "Success is not the key to happiness. Happiness is the key to success.",
  "The only way to do great work is to love what you do.",
  "Your limitation—it's only your imagination.",
];

export default function QuoteHeader() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-800 p-4 text-center text-lg font-serif font-semibold text-[#00d4ff] border-b border-gray-700 animate-fadeIn">
      "{quotes[quoteIndex]}"
    </div>
  );
}
