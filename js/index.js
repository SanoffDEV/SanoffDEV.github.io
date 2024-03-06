const sidebar = document.getElementById("side-bar");
const headercontent = document.querySelector(".headercontent");
const togglebtn = document.getElementById("btn");
let initialBtnStyle = {
  left: btn.style.left,
  top: btn.style.top,
  opacity: btn.style.opacity,
};

togglebtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");

  if (sidebar.classList.contains("active")) {
    btn.style.left = "30px";
    btn.style.top = "40px";
  } else {
    btn.style.left = initialBtnStyle.left;
    btn.style.top = initialBtnStyle.top;
  }
});
