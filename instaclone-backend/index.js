const express = require("express");
const postModel = require("./models/postModel");
const bodyParser = require('body-parser');
const cors = require("cors");
const fileUpload = require("express-fileupload");
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://ahuja:harshit@cluster0.hedg8ld.mongodb.net/instaclone?retryWrites=true&w=majority", () => {
  console.log("connected to dataBase");
});


const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(fileUpload());



app.get("/all", async (req, res) => {
  const blogPosts = await postModel.find();
  res.status(200).json({
    blogPosts
  });
});

app.post("/add", async (req, res) => {
  let file = req.files.postImage
  try {
    file.mv("./uploads/" + file.name, (err) => {
      if (err) {
        return res.status(500).json({
          status: "failed",
          message: "error while uploading image"
        })
      } else {
        let newPost = postModel.create({
          name: req.body.name,
          location: req.body.location,
          likes: 0,
          description: req.body.description,
          postImage: `https://harshit-instaclone.herokuapp.com/images/${file.name}`,
          date: new Date()
        })

        res.redirect("https://harshit-instaclone.netlify.app/");
      }
    })


  } catch (e) {
    res.status(500).json({
      status: "failed",
      message: "enter all the required fields corrrectly"
    })
  }
}
);

app.get("/images/:name", async (req, res) => {
  try {
    res.sendFile(__dirname + `/uploads/${req.params.name}`);
  } catch {
    res.status(404).json({
      status: "failed",
      message: "image not available"
    })
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`server is up at ${PORT}`));