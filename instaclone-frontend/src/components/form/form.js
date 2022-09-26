import "./form.css"
import Header from "../header/header";
const Form = () => {

  return (
    <>
      <Header />
      <form className="form" enctype="multipart/form-data" method="POST" action="https://harshit-instaclone.herokuapp.com/add">
        <input className="file" type="file" name="postImage" placeholder="No file chosen" required></input>
        <input className="author" type="text" name="name" placeholder="Author" required></input>
        <input type="text" name="location" placeholder="Location" required></input>
        <input className="des" type="text" name="description" placeholder="Description" required></input>
        <button className="btn" type="submit">Post</button>
      </form>
    </>
  )
};

export default Form;