import React, { useState } from "react";
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark
} from "lucide-react";
import "../../styles/post.scss";

const Post = () => {
  const [liked, setLiked] = useState(false);

  return (
    <main className="feed-page">
      <div className="post-card">

        {/* Header */}
        <div className="post-header">
          <div className="user-info">
            <img
              src="https://images.unsplash.com/photo-1638991504410-96de7ac1c432?q=80&w=985&auto=format&fit=crop"
              alt="user"
            />
            <div>
              <p className="username">AlishaXce</p>
              <span className="location">Mumbai, India</span>
            </div>
          </div>

          <button className="follow-btn">Follow</button>
        </div>

        {/* Post Image */}
        <div className="post-image">
          <img
            src="https://plus.unsplash.com/premium_photo-1711407242470-52576a2417e0?q=80&w=1170&auto=format&fit=crop"
            alt="post"
          />
        </div>

        {/* Actions */}
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

        {/* Bottom Section */}
        <div className="post-bottom">
          <p className="likes">{liked ? "24,532 likes" : "24,531 likes"}</p>

          <p className="caption">
            <span className="username">AlishaXce</span>  
            Building aesthetic code one div at a time ✨
          </p>

          <p className="view-comments">View all 128 comments</p>
        </div>
      </div>
    </main>
  );
};

export default Post;