import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePosts } from "../context/PostContext";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Frontend");
  const [status, setStatus] = useState("Published");
  const { addPost } = usePosts();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newPost = {
      title,
      category,
      status,
    };

    addPost(newPost);
    navigate("/admin/posts");
  };

  return (
    <div className="create-post-page" style={{ padding: "20px" }}>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px", maxWidth: "500px", marginTop: "20px" }}>
        
        <div>
          <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Post Title</label>
          <input
            type="text"
            placeholder="Enter post title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
            required
          />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          >
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Tools">Tools</option>
            <option value="Design">Design</option>
          </select>
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          >
            <option value="Published">Published</option>
            <option value="Draft">Draft</option>
          </select>
        </div>

        <button
          type="submit"
          style={{ padding: "12px", background: "#6366f1", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" }}
        >
          Save Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
