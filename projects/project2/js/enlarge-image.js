/* =========================
   PROJECT 1 LIGHTBOX 
========================= */

if (document.querySelector(".screenshot-grid")) {

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".lightbox-close");

  document.querySelectorAll(".screenshot-grid img").forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "block";
      lightboxImg.src = img.src;
    });
  });

  closeBtn.onclick = () => {
    lightbox.style.display = "none";
  };

  lightbox.onclick = () => {
    lightbox.style.display = "none";
  };
}
