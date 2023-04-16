import Container from "../components/Container";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Post = () => {
  const [postInfo, setPostInfo] = useState({ id: {} });

  const { id } = useParams();

  const fetchDetails = () => {
    fetch(`http://localhost:3001/v1/api/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPostInfo(data));
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  if (postInfo !== null) {
    return (
      <Container>
        <div class="center">
          <p class="a">{postInfo.title}</p>
          <p class="b">By {postInfo.author}</p>
          <div className="p-4">
            <p class="b">The content is {postInfo.content}</p>
            <p class="b">It was updated on {postInfo.last_updated}</p>
            <p class="b">It is {postInfo.originally_published}</p>
          </div>
        </div>
      </Container>
    );
  }
};

export default Post;
