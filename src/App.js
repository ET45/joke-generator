import React, { useState } from "react";
import { Card, CardBody, CardTitle, Avatar } from "@progress/kendo-react-layout";
import { LoaderComponent } from "./components/LoaderComponent";
import { NotificationComponent } from "./components/NotificationComponent";
import { JokeDialog } from "./components/JokeDialog";
import { CategorySelector } from "./components/CategorySelector";
import { JokeInput } from "./components/JokeInput";
import { JokeButton } from "./components/JokeButton";
import { fetchJoke } from "./services/jokeService";
import "./styles/JokeGenerator.css";  // Importing the styles

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
      <Card className="joke-card">
        <CardBody>
          <CardTitle className="joke-title">Joke Generator</CardTitle>
          <Avatar type="image" size="large" shape="circle" className="joke-avatar">😂</Avatar>

          <JokeInput keyword={keyword} setKeyword={setKeyword} clearCategory={() => setActiveCategory(null)} />
          <CategorySelector
  activeCategory={activeCategory}
  setActiveCategory={setActiveCategory}
  keyword={keyword}
  setKeyword={setKeyword}
/>

          <JokeButton handleFetchJoke={handleFetchJoke} loading={loading} />

          {loading && <LoaderComponent />}
        </CardBody>
      </Card>

      {notification && <NotificationComponent type={notification.type} message={notification.message} />}
      {showDialog && <JokeDialog joke={joke} setShowDialog={setShowDialog} />}
    </div>
  );
};

export default JokeGenerator;
