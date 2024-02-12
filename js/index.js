const sidebar = document.getElementById("side-bar");
const headercontent = document.querySelector(".headercontent");
const togglebtn = document.getElementById("btn");
const infosbtn = document.querySelector(".infos");
const infoscontainer = document.querySelector(".infoscontainer");
let initialBtnStyle = {
  left: btn.style.left,
  top: btn.style.top,
};

infoscontainer.addEventListener("mouseout", () => {
  setTimeout(() => {
    infosbtn.style.display = "block";
  }, 2500);

  infoscontainer.style.transition = "transform 2s"; // Même durée de transition pour la réapparition
  infoscontainer.style.transform = "translateX(0)";
});

infosbtn.addEventListener("mouseover", () => {
  infosbtn.style.transition = "opacity 1s, transform 1s";
  infosbtn.style.display = "none";
  infoscontainer.style.transition = "transform 1s"; // Augmentation de la durée à 2 secondes
  infoscontainer.style.transform = "translateX(-85px)";
});

infosbtn.addEventListener("mouseout", () => {
  infosbtn.style.display = "block";
  infoscontainer.style.transition = "transform 1s"; // Même durée de transition pour la réapparition
  infoscontainer.style.transform = "translateX(0)";
});

infoscontainer.addEventListener("mouseover", () => {
  infoscontainer.style.transform = "translateX(-85px)";
  infosbtn.style.display = "none";
});

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

btn2.addEventListener("click", () => {
  ul.style.display = "block";
});

togglebtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

headercontent.addEventListener("click", () => {
  sidebar.classList.remove("active");
});
