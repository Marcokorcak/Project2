import Container from "../components/Container";
import React from "react";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";

const Create = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [postData, setPostData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const postBlog = async () => {
    const URL = "http://localhost:3001/v1/api/posts";
    axios
      .post(URL, {
        title: title,
        content: content,
        author: author,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (e) {
        setError("Error: " + e.message);
      });
    setTitle("");
    setContent("");
    setAuthor("");
  };

  return (
    <>
      {error && <ErrorAlert>{error}</ErrorAlert>}
      {!error && loading && (
        <div className="max-w-[230px]">
          <Skeleton count="10" />
        </div>
      )}
      {!error && !loading && (
        <>
          <h1 className="edit"> Create a New Post </h1>

          <div className="create">
            <label> Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <label> Author:</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />

            <label> Content</label>
            <textarea
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <div className="create_button" onClick={postBlog}>
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
                  Submit Post
                </span>
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Create;
