const upload = document.getElementById("upload");
const video = document.getElementById("videoPlayer");
const enhanceBtn = document.getElementById("enhanceBtn");

// preview video
upload.addEventListener("change", () => {
  const file = upload.files[0];
  if (file) {
    video.src = URL.createObjectURL(file);
  }
});

// enhance video
enhanceBtn.addEventListener("click", async () => {
  const file = upload.files[0];

  if (!file) {
    alert("Upload video dulu!");
    return;
  }

  const formData = new FormData();
  formData.append("video", file);

  alert("Processing...");

  const res = await fetch("/enhance", {
    method: "POST",
    body: formData
  });

  const data = await res.json();

  video.src = data.video;
});
