import React, { useState } from "react";
import { NotificationComponent } from "./components/NotificationComponent";
import { JokeDialog } from "./components/JokeDialog";
import { fetchJoke } from "./services/jokeService";
import { FloatingEmojis } from "./layout/FloatingEmojis";
import { JokeCard } from "./layout/JokeCard";
import "./styles/JokeGenerator.css";

const JokeGenerator = () => {
  const [joke, setJoke] = useState("");
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Clean");

  const handleFetchJoke = async () => {
    setLoading(true);
    setNotification(null);

    try {
      const jokeResponse = await fetchJoke(activeCategory, keyword);
      setJoke(jokeResponse);
      setShowDialog(true);
    } catch (error) {
      setNotification({ type: "error", message: "Failed to fetch a joke. Try again!" });
    }
    setLoading(false);
  };

  return (
    <div className="joke-generator-container">
      <FloatingEmojis />

      <JokeCard
        keyword={keyword}
        setKeyword={setKeyword}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        handleFetchJoke={handleFetchJoke}
        loading={loading}
      />

      {notification && (
        <NotificationComponent type={notification.type} message={notification.message} />
      )}

      {showDialog && (
        <JokeDialog joke={joke} setShowDialog={setShowDialog} />
      )}
    </div>
  );
};

export default JokeGenerator;
