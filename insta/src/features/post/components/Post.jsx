import React, { useState } from "react";
import { Heart, MessageCircle, Send, Bookmark } from "lucide-react";
import "../../styles/post.scss";

const Post = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const username = post?.user?.username || "Unknown user";
  const profileImage = post?.user?.profileImage || "https://via.placeholder.com/40?text=U";
  const imageUrl = post?.img_url || "https://via.placeholder.com/800x800?text=No+Image";
  const caption = post?.caption || "";

  return (
    <article className="post-card">
      <div className="post-header">
        <div className="user-info">
          <img src={profileImage} alt={username} />
          <div>
            <p className="username">{username}</p>
          </div>
        </div>

        <button className="follow-btn">Follow</button>
      </div>

      <div className="post-image">
        <img src={imageUrl} alt="post" />
      </div>

      <div className="post-actions">
        <div className="left-icons">
          <Heart
            className={`icon ${liked ? "liked" : ""}`}
            onClick={() => setLiked(!liked)}
          />
          <MessageCircle className="icon" />
          <Send className="icon" />
        </div>

        <Bookmark className="icon" />
      </div>

      <div className="post-bottom">
        <p className="likes">{liked ? "You and others liked this" : "Be the first to like this"}</p>

        <p className="caption">
          <span className="username">{username}</span>{" "}
          {caption}
        </p>
      </div>
    </article>
  );
};

export default Post;
