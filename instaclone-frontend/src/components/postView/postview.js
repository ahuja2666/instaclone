import "./postview.css"
import { useState, useEffect } from "react";

import Header from "../header/header";

const PostView = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://harshit-instaclone.herokuapp.com/all", {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }).then((data) => data.json())
      .then((resposne) => setPosts(resposne.blogPosts.reverse()));
  }, []);

  return (
    <>
      <Header />
      {posts.map((data, i) => {
        let date = String(data.date).split(" ");
        console.log(date);
        date = `${date[2]} ${date[1]} ${date[3]}`
        return (<div className="parent-post" key={i}>

          <div className="name"><strong>{data.name}</strong></div>
          <div className=" location">{data.location}</div>
          <div className="dots">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
          </div>
          <img className="postimg" height="250" width="410" src={data.postImage} alt="img" />
          <div className="icons">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
          </div>
          <div className="icons">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
            </svg>
          </div>
          <div className="date">{date}</div>
          <div className="likes">{data.likes} likes</div>
          <div className="description"><strong>{data.description}</strong></div>

        </div>
        )
      })}
    </>
  )
}

export default PostView;