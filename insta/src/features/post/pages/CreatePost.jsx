import React,{useState,useRef}from "react";
import '../../styles/createpost.scss'
import { usePost } from "../hooks/usePost";
import { useNavigate } from "react-router";

const CreatePost = () => {
    const [caption, setCaption] = useState("");
    const postImageInputFieldRef = useRef(null);

    const {loading,handleCreatePost} = usePost()

    const navigate = useNavigate()

async function handleSubmit(e){
        e.preventDefault();

        const file = postImageInputFieldRef.current.files[0]

        await handleCreatePost(file,caption)
    }

    if(loading){
        return(
            <main>
                <h1>Creating Post</h1>
            </main>
        )
    }
  return (
    <main className="create-post-page">
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>

      <div className="form-container">
        <h1 className="title">Create New Post</h1>

        <form onSubmit={handleSubmit}className="create-form">
          <div className="file-upload">
            <label htmlFor="postImage" 
            className="file-label">
              Select Image
            </label>
            <input ref={postImageInputFieldRef} type="file" hidden name="upload" id="postImage" />
          </div>

          <div className="input-group">
            <input
              type="text"
              name="caption"
              id="caption"
              placeholder="Write your caption..."
              onChange={(e)=>{setCaption(e.target.value)}}
            />
          </div>

          <button type="submit" className="submit-btn">
            Publish Post
          </button>
        </form>
      </div>
    </main>
  );
};

export default CreatePost;