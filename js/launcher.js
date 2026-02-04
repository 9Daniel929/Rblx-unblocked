const params = new URLSearchParams(location.search);
const id = params.get("id");

const frame = document.getElementById("frame");
const loader = document.getElementById("loader");

setTimeout(() => {
  loader.style.display = "none";
  frame.style.display = "block";

  // DEMO / PLACEHOLDER GAMES
  if (id === "sab") {
    frame.src = "https://example.com";
  }
  else if (id === "tsunami") {
    frame.src = "https://example.com";
  }
  else if (id === "99nights") {
    frame.src = "https://example.com";
  }
  else {
    frame.src = "https://example.com";
  }
}, 2000);

