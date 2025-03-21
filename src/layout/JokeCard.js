import React from "react";
import { Card, CardBody, CardTitle, Avatar } from "@progress/kendo-react-layout";
import { JokeInput } from "../components/JokeInput";
import { CategorySelector } from "../components/CategorySelector";
import { JokeButton } from "../components/JokeButton";
import { LoaderComponent } from "../components/LoaderComponent";

export const JokeCard = ({
  keyword,
  setKeyword,
  activeCategory,
  setActiveCategory,
  handleFetchJoke,
  loading,
}) => (
  <Card className="joke-card">
    <CardBody>
      <CardTitle className="joke-title">Joke Generator</CardTitle>
      <Avatar type="image" size="large" shape="circle" className="joke-avatar">😂</Avatar>

      <JokeInput
        keyword={keyword}
        setKeyword={setKeyword}
        clearCategory={() => setActiveCategory(null)}
      />

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
);
