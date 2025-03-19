export const fetchJoke = async (category, keyword) => {
    const response = await fetch("https://api.cohere.ai/v1/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_COHERE_API_KEY}`,
      },
      body: JSON.stringify({
        model: "command-r-plus",
        prompt: `Tell me a ${category.toLowerCase()} joke about ${keyword || "anything"}.`,
        max_tokens: 50,
      }),
    });
  
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
  
    const data = await response.json();
    return data.generations[0]?.text.trim() || "Couldn't generate a joke.";
  };
  