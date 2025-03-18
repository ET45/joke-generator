import React, { useState } from "react";
import { Button } from "@progress/kendo-react-buttons";
import { Input } from "@progress/kendo-react-inputs";
import { Card, CardBody, CardTitle } from "@progress/kendo-react-layout";

const JokeGenerator = () => {
  const [joke, setJoke] = useState("");
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);


  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.cohere.ai/v1/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_COHERE_API_KEY}`,
        },
        body: JSON.stringify({
          model: "command-r-plus", 
          prompt: `Tell me a funny joke about ${keyword || "anything"}.`,
          max_tokens: 50,
        }),
      });
  
      const responseText = await response.text();
      console.log("Full Response:", responseText);
  
      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText} - ${responseText}`);
      }
  
      const data = JSON.parse(responseText);
      setJoke(data.generations[0]?.text.trim() || "Couldn't generate a joke.");
    } catch (error) {
      console.error("Error fetching joke:", error);
      setJoke(`Failed to fetch a joke. Error: ${error.message}`);
    }
    setLoading(false);
  };
  

  return (
    <div className="k-d-flex k-justify-content-center k-align-items-center k-flex-column" style={{ minHeight: "100vh" }}>
      <Card style={{ width: "400px", textAlign: "center" }}>
        <CardBody>
          <CardTitle>Joke Generator</CardTitle>
          <Input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Enter a topic (optional)"
            style={{ marginBottom: "10px" }}
          />
          <Button onClick={fetchJoke} disabled={loading} primary>
            {loading ? "Generating..." : "Get Joke"}
          </Button>
          {joke && <p style={{ marginTop: "10px" }}>{joke}</p>}
        </CardBody>
      </Card>
    </div>
  );
};

export default JokeGenerator;
