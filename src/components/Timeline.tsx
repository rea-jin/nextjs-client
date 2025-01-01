import React, { useEffect, useState } from "react";
import Post from "./Post";
import apiClient from "../lib/apiClient";
import { PostType } from "../types";

const Timeline = () => {
  // 最初は空文字
  const [postText, setPostText] = useState<string>("");
  // 最新の投稿
  const [latestPost, setLatestPost] = useState<PostType[]>([]);
  // 送信時
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    try {
      const newPost = await apiClient.post("/posts/post", {
        content: postText,
      });
      setLatestPost((prevPosts) => {
        // 配列を新たに作って十件までにする
        const updatePosts = [newPost.data, ...prevPosts]; // 先頭に挿入
        return updatePosts.slice(0, 10);
      });
      setPostText("");
    } catch (err) {
      console.log(err);
      alert("ログインしてください");
    }
  };
  // 初回読み込み時
  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
        const response = await apiClient.get("/posts/get_latest_post");
        setLatestPost(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchLatestPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto py-4">
        <div className="bg-white shadow-md rounded p-4 mb-4">
          <form onSubmit={handleSubmit}>
            <textarea
              className="w-full h-24 p-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="What's on your mind?"
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setPostText(e.target.value)
              }
              value={postText}
            ></textarea>
            <button
              type="submit"
              className="mt-2 bg-gray-700 hover:bg-green-700 duration-200 text-white font-semibold py-2 px-4 rounded"
            >
              投稿
            </button>
          </form>
        </div>
        {latestPost.map((post: PostType) => (
          <Post key={post.id} post={post} />
        ))}
      </main>
    </div>
  );
};

export default Timeline;
