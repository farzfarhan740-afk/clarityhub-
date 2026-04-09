# clarityhub-
Web
const express = require("express");
const multer = require("multer");
const { exec } = require("child_process");

const app = express();
const port = 3000;

// simpan file upload
const upload = multer({ dest: "uploads/" });

// akses folder public
app.use(express.static("public"));

// API enhance video
app.post("/enhance", upload.single("video"), (req, res) => {
  const input = req.file.path;
  const output = "public/output.mp4";

  const cmd = `ffmpeg -i ${input} -vf scale=1280:720 -b:v 2000k ${output}`;

  exec(cmd, (err) => {
    if (err) {
      console.log(err);
      return res.send("Gagal proses video");
    }
    res.json({ video: "output.mp4" });
  });
});

app.listen(port, () => {
  console.log(`Server jalan di http://localhost:${port}`);
});
