import { useState } from "react";
import { Content, Title, PublishButton, TextInput, Counter, ToggleButton } from "./index"

const Article = (props) => {
  const [isPublished, setIsPublished] = useState(false);
  console.log(isPublished);

  const publishArticle = () => {
    setIsPublished(true);
  }
  return (
    <div>
      <Title title={props.title} />
      <Content content={props.content} />
      <Counter />
      <TextInput />
      <ToggleButton />
      <PublishButton isPublished={isPublished} onClick={publishArticle} />
    </div>
  )
}

export default Article;