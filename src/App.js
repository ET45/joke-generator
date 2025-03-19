import React, { useState } from "react";
import { Card, CardBody, CardTitle, Avatar } from "@progress/kendo-react-layout";
import { LoaderComponent } from "./components/LoaderComponent";
import { NotificationComponent } from "./components/NotificationComponent";
import { JokeDialog } from "./components/JokeDialog";
import { CategorySelector } from "./components/CategorySelector";
import { JokeInput } from "./components/JokeInput";
import { JokeButton } from "./components/JokeButton";
import { fetchJoke } from "./services/jokeService";

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
    <div style={{ background: "#121212", color: "white", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Card style={{ width: "450px", background: "#1E1E1E", color: "white", padding: "20px", borderRadius: "10px", textAlign: "center" }}>
        <CardBody>
          <CardTitle style={{ fontSize: "22px", fontWeight: "bold" }}>Joke Generator</CardTitle>
          <Avatar type="image" size="large" shape="circle" style={{ margin: "10px auto", fontSize: "30px" }}>😂</Avatar>

          <JokeInput keyword={keyword} setKeyword={setKeyword} />
          <CategorySelector activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
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
