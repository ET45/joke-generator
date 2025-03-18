import React, { useState } from "react";
import { Button } from "@progress/kendo-react-buttons";
import { Input } from "@progress/kendo-react-inputs";
import { Card, CardBody, CardTitle, Avatar } from "@progress/kendo-react-layout";
import { Loader } from "@progress/kendo-react-indicators";
import { Notification } from "@progress/kendo-react-notification";
import { Dialog } from "@progress/kendo-react-dialogs";
import { Tooltip } from "@progress/kendo-react-tooltip";

const JokeGenerator = () => {
  const [joke, setJoke] = useState("");
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Clean");

  const categories = ["Country", "Dad Jokes", "Dark Humor"];

  const fetchJoke = async () => {
    setLoading(true);
    setNotification(null);
    try {
      const response = await fetch("https://api.cohere.ai/v1/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_COHERE_API_KEY}`,
        },
        body: JSON.stringify({
          model: "command-r-plus",
          prompt: `Tell me a ${activeCategory.toLowerCase()} joke about ${keyword || "anything"}.`,
          max_tokens: 50,
        }),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      setJoke(data.generations[0]?.text.trim() || "Couldn't generate a joke.");
      setShowDialog(true);
    } catch (error) {
      console.error("Error fetching joke:", error);
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
          <Input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Enter a topic (optional)"
            style={{ marginBottom: "15px", background: "#333", color: "white", borderRadius: "5px", padding: "10px" }}
          />
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "15px" }}>
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                style={{
                  background: activeCategory === category ? "#0078D4" : "#333",
                  color: "white",
                  borderRadius: "5px",
                  padding: "8px 15px",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                {category}
              </Button>
            ))}
          </div>
          <Tooltip anchorElement="target" position="top">
            <Button onClick={fetchJoke} disabled={loading} primary style={{ padding: "10px 20px", fontSize: "16px" }}>
              {loading ? "Generating..." : "Get Joke"}
            </Button>
          </Tooltip>
          {loading && <Loader size="large" style={{ marginTop: "15px" }} />} 
        </CardBody>
      </Card>

      {notification && (
        <Notification type={{ style: notification.type, icon: true }} closable>
          {notification.message}
        </Notification>
      )}

      {showDialog && (
        <Dialog >
          <p>A JOKE</p>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>{joke}</p>
          <Button onClick={() => setShowDialog(false)} primary style={{ marginTop: "10px" }}>Close</Button>
        </Dialog>
      )}
    </div>
  );
};

export default JokeGenerator;
