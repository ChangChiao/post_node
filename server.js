const http = require("http");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { errorHandle, successHandle } = require("./handler");
const { getPost, postPost, deletePost, patchPost } = require("./logic");

dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  //   .connect('mongodb://localhost:27017/post')
  .connect(DB)
  .then(() => {
    console.log("connect success");
  })
  .catch((error) => {
    console.error(error.reason);
  });

const requestListener = (req, res) => {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  if (req.url == "/posts" && req.method == "GET") {
    getPost(res);
  } else if (req.url == "/posts" && req.method == "POST") {
    req.on("end", async () => {
      postPost(req, res, body);
    });
  } else if (req.url == "/posts" && req.method == "DELETE") {
    deletePost.deletePostAll(res);
  } else if (req.url.startsWith("/posts/") && req.method == "DELETE") {
    deletePost.deletePostSingle(req, res);
  } else if (req.url.startsWith("/posts/") && req.method == "PATCH") {
    req.on("end", async () => {
      patchPost(req, res, body);
    });
  } else if (req.method == "OPTIONS") {
    successHandle(res, {});
  } else {
    errorHandle(res, "無此路由", 404);
  }
};

const server = http.createServer(requestListener);
server.listen(process.env.PORT);
