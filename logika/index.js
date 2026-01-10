
const nav = document.getElementById("nav");
const content = document.getElementById("konten");

let tampil = false; // status drawer / konten

nav.onclick = () => {
  if (!tampil) {
    fetch("item/nav_index.html")
      .then(res => res.text())
      .then(html => {
        content.innerHTML = html;
        tampil = true;
      });
  } else {
    content.innerHTML = "";
    tampil = false;
  }
};
