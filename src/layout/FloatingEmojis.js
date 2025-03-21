import React, { useEffect, useRef, useState } from "react";
import "../styles/JokeGenerator.css";

const emojis = ["😂", "🤣", "😆", "😁", "😹", "😜"];

export const FloatingEmojis = () => {
  const [floatingEmojis, setFloatingEmojis] = useState([]);
  const emojiIdRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newEmoji = {
        id: emojiIdRef.current++,
        symbol: emojis[Math.floor(Math.random() * emojis.length)],
        left: Math.random() * 100,
        animationDuration: 3 + Math.random() * 3,
      };

      setFloatingEmojis((prev) => [...prev, newEmoji]);

      setTimeout(() => {
        setFloatingEmojis((prev) => prev.filter((e) => e.id !== newEmoji.id));
      }, newEmoji.animationDuration * 1000);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="floating-emojis">
      {floatingEmojis.map((emoji) => (
        <div
          key={emoji.id}
          className="emoji"
          style={{
            left: `${emoji.left}%`,
            animationDuration: `${emoji.animationDuration}s`,
          }}
        >
          {emoji.symbol}
        </div>
      ))}
    </div>
  );
};
