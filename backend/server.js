const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", function(req, res) {
  res.writeHead(200, { "Content-Type": "video/mp4" });
  console.log(req.headers);
  var rs = fs.createReadStream("video.mp4");
  rs.pipe(res);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
