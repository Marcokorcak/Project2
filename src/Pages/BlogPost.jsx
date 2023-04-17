import Container from "../components/Container";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Edit from "./Edit";
import Delete from "./Delete";

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
            <p class="b">It was created on {postInfo.originally_published}</p>
            <Link to={`/posts/${postInfo.id}/edit`}
            >
                   <div className="edit_button">
              <a
                href="#_"
                class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
              >
                <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    class="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    class="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>

                <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                  Edit Post
                </span>
              </a>
            </div>
            </Link>
            <Link to={`/posts/${postInfo.id}/delete`}
            >
                   <div className="edit_button">
              <a
                href="#_"
                class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
              >
                <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    class="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    class="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>

                <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                  Delete Post
                </span>
              </a>
            </div>
            </Link>
          </div>
        </div>
        
      </Container>
    );
  }
};

export default Post;
